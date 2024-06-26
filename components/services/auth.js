const {
  createUser,
  verifyOtp,
  findUserByEmail,
  findUserById,
  updateUser,
  deleteUser,
  resendOtp,
  resetUserPassword,
  getGoogleAccessTokenData,
} = require("../repositories/auth");

const {
  sendOtpEmail,
  sendResetPasswordEmail,
} = require("../../src/utils/auth");

const jsonwebtoken = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { createManyNotifications } = require("./notif");

exports.register = async (payload) => {
  const existingUser = await findUserByEmail(payload.email);

  if (existingUser?.dataValues?.isVerified) {
    throw new Error("Email is already registered and verified!");
  }

  let user;
  if (existingUser) {
    user = await updateUser(existingUser?.dataValues?.id, payload);
  } else {
    user = await createUser(payload);
  }

  if (user[0]) {
    delete user[0]?.dataValues?.password;
  } else {
    delete user?.dataValues?.password;
  }

  const jwtPayload = { id: user[0]?.id || user?.id };
  const token = jsonwebtoken.sign(jwtPayload, process.env.JWT_SECRET, {
    expiresIn: "2h",
  });

  await sendOtpEmail(
    user[0]?.dataValues?.email || user?.dataValues?.email,
    user[0]?.dataValues?.otp || user?.dataValues?.otp,
    user[0]?.dataValues?.name || user?.dataValues?.name
  );

  if (user[0]) {
    delete user[0]?.dataValues?.otp;
  } else {
    delete user?.dataValues?.otp;
  }

  await createManyNotifications([
    {
      type: "promosi",
      title: "Diskon pendatang baru!",
      content: "Diskon 10% untuk kamu para pendatang baru!",
      user_id: user.id,
      isRead: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      type: "promosi",
      title: "Diskon pertengahan tahun!",
      content:
        "Diskon 5% pertengahan tahun hanya berlaku 1 hari dari tanggal 25 Juni sampai 30 Juni yaa! Jangan sampai kelewatan",
      user_id: user.id,
      isRead: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ]);

  return {
    user,
    token,
  };
};

exports.verifyOtp = async (email, otp) => {
  user = await verifyOtp(email, otp);

  user
    ? delete user?.dataValues?.password && delete user?.dataValues?.otp
    : delete user[0]?.dataValues?.password && delete user[0]?.dataValues?.otp;

  return user;
};

exports.resendOtp = async (id) => {
  const user = await resendOtp(id);

  return await sendOtpEmail(user.email, user.otp, user.name);
};

exports.login = async (payload) => {
  const user = await findUserByEmail(payload.email);

  if (!user) {
    throw new Error(`User with email : ${payload.email} Not Found`);
  }

  if (user?.isVerified === false) {
    throw new Error("Your Account Has Not Been Verified, Please Register");
  }

  const passwordMatch = await bcrypt.compare(payload.password, user?.password);

  if (!passwordMatch) {
    throw new Error(`Invalid Password`);
  }

  user?.dataValues?.password
    ? delete user?.dataValues?.password
    : delete user?.password;

  const jwtPayload = { id: user.id };

  const token = jsonwebtoken.sign(jwtPayload, process.env.JWT_SECRET, {
    expiresIn: "2h",
  });

  return (data = {
    user,
    token,
  });
};

exports.googleLogin = async (accessToken) => {
  const googleData = await getGoogleAccessTokenData(accessToken);

  let user = await findUserByEmail(googleData?.email);

  if (!user) {
    user = await createUser({
      email: googleData?.email,
      password: "",
      name: googleData?.given_name,
      picture: googleData?.picture,
      isVerified: true,
    });

    await createManyNotifications([
      {
        type: "promosi",
        title: "Diskon pendatang baru!",
        content: "Diskon 10% untuk kamu para pendatang baru!",
        user_id: user.id,
        isRead: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        type: "promosi",
        title: "Diskon pertengahan tahun!",
        content:
          "Diskon 5% pertengahan tahun hanya berlaku 1 hari dari tanggal 25 Juni sampai 30 Juni yaa! Jangan sampai kelewatan",
        user_id: user.id,
        isRead: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  }

  delete user?.dataValues?.password;

  const jwtPayload = {
    id: user?.id,
  };

  const token = jsonwebtoken.sign(jwtPayload, process.env.JWT_SECRET, {
    expiresIn: "2h",
  });

  return {
    user,
    token,
  };
};

exports.forgotPassword = async (email) => {
  const user = await findUserByEmail(email);
  if (!user) {
    throw new Error("User not Found");
  }

  const jwtPayload = { id: user.id };

  const token = jsonwebtoken.sign(jwtPayload, process.env.JWT_SECRET, {
    expiresIn: "2h",
  });

  const link = `${process.env.FRONTEND_URL}/reset-password/${user.id}/${token}`;

  await sendResetPasswordEmail(user.email, link, user.name);

  return link;
};

exports.resetPassword = async (id, token, newPassword) => {
  const user = await findUserById(id);
  if (!user) {
    throw new Error("User not Found");
  }

  jsonwebtoken.verify(token, process.env.JWT_SECRET);
  const encryptedPassword = await bcrypt.hash(newPassword, 10);
  return await resetUserPassword(id, encryptedPassword);
};

exports.profile = async (id) => {
  let data = await findUserById(id);
  if (!data) {
    throw new Error(`User not Found`);
  }

  data?.dataValues?.password
    ? delete data?.dataValues?.password
    : delete data?.password;

  return data;
};

exports.updateUser = async (id, payload) => {
  let data = await updateUser(id, payload);

  data[0]?.dataValues?.password
    ? delete data[0]?.dataValues?.password
    : delete data?.password;

  return data;
};

exports.deleteUser = async (id) => (data = await deleteUser(id));

exports.changePassword = async (id, payload) => {
  const user = await findUserById(id);
  if (!user) {
    throw new Error("User not found");
  }

  const isPasswordValid = await bcrypt.compare(
    payload.current_password,
    user.password
  );
  if (!isPasswordValid) {
    throw new Error("Wrong password");
  }

  const newUserPassword = await bcrypt.hashSync(payload.new_password, 10);

  const updatedUser = await updateUser(id, {
    ...user,
    password: newUserPassword,
  });
  return updatedUser;
};
