const {
  createUser,
  verifyOtp,
  findUserByEmail,
  findUserById,
  updateUser,
  deleteUser,
  resendOtp,
  updateUserPassword,
  getGoogleAccessTokenData,
} = require("../repositories/auth");

const {
  sendOtpEmail,
  sendResetPasswordEmail,
} = require("../../src/utils/auth");

const jsonwebtoken = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { createManyNotifications } = require("./notif");

// register
exports.register = async (payload) => {
  // Cek apakah email sudah terdaftar dan diverifikasi
  const existingUser = await findUserByEmail(payload.email);

  if (existingUser?.dataValues?.isVerified) {
    throw new Error("Email is already registered and verified!");
  }

  let user;
  if (existingUser) {
    // user has no verified
    user = await updateUser(existingUser?.dataValues?.id, payload);
  } else {
    // user?
    user = await createUser(payload);
  }

  // Hapus password dari respons
  if (user[0]) {
    delete user[0]?.dataValues?.password;
  } else {
    delete user?.dataValues?.password;
  }

  // Buat token jwt
  const jwtPayload = { id: user[0]?.id || user?.id };
  const token = jsonwebtoken.sign(jwtPayload, process.env.JWT_SECRET, {
    expiresIn: "2h",
    expiresIn: "2h",
  });

  // Kirim email OTP
  await sendOtpEmail(
    user[0]?.dataValues?.email || user?.dataValues?.email,
    user[0]?.dataValues?.otp || user?.dataValues?.otp,
    user[0]?.dataValues?.name || user?.dataValues?.name
  );

  // delete otp from respons payload
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
    user,
    token,
  };
};

// verify-otp
exports.verifyOtp = async (email, otp) => {
  user = await verifyOtp(email, otp);

  // Hapus password dari respons
  user
    ? delete user?.dataValues?.password && delete user?.dataValues?.otp
    : delete user[0]?.dataValues?.password && delete user[0]?.dataValues?.otp;

  return user;
};

//  resend-otp
exports.resendOtp = async (id) => {
  const user = await resendOtp(id);

  return await sendOtpEmail(user.email, user.otp);
};

// login
exports.login = async (payload) => {
  const user = await findUserByEmail(payload.email);

  if (!user) {
    throw new Error(`User with email : ${payload.email} Not Found!`);
  }

  if (user?.isVerified === false) {
    throw new Error("Your Account Has Not Been Verified, Please Register!");
  }

  const passwordMatch = await bcrypt.compare(payload.password, user?.password);

  if (!passwordMatch) {
    throw new Error(`Invalid Password!`);
  }

  // delete password
  user?.dataValues?.password
    ? delete user?.dataValues?.password
    : delete user?.password;

  // create token
  const jwtPayload = { id: user.id };

  const token = jsonwebtoken.sign(jwtPayload, process.env.JWT_SECRET, {
    expiresIn: "2h",
  });

  return (data = {
    user,
    token,
  });
};

// google-login
exports.googleLogin = async (accessToken) => {
  // validate the token and get the data from google
  const googleData = await getGoogleAccessTokenData(accessToken);

  // get is there any existing user with the email
  let user = await findUserByEmail(googleData?.email);

  // if not found
  if (!user) {
    // Create new user based on google data that get by access_token
    user = await createUser({
      email: googleData?.email,
      password: "",
      name: googleData?.given_name,
      picture: googleData?.picture,
      isVerified: true,
    });
  }

  // Delete object password from user
  delete user?.dataValues?.password;

  // create token
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

// forgot-pass
exports.forgotPassword = async (email) => {
  const user = await findUserByEmail(email);
  if (!user) {
    throw new Error("User Not Exists!!");
  }

  // create token
  const jwtPayload = { id: user.id };

  const token = jsonwebtoken.sign(jwtPayload, process.env.JWT_SECRET, {
    expiresIn: "2h",
  });

  // link deploy for reset pass route
  const link = `${process.env.FRONTEND_URL}/reset-password/${user.id}/${token}`;

  await sendResetPasswordEmail(email, link);

  return link;
};

// reset-pass
exports.resetPassword = async (id, token, newPassword) => {
  const user = await findUserById(id);
  if (!user) {
    throw new Error("User Not Exists!!");
  }

  jsonwebtoken.verify(token, process.env.JWT_SECRET);
  const encryptedPassword = await bcrypt.hash(newPassword, 10);
  return await updateUserPassword(id, encryptedPassword);
};

// profile
exports.profile = async (id) => {
  let data = await findUserById(id);
  if (!data) {
    throw new Error(`User is not Found`);
  }

  // delete password
  data?.dataValues?.password
    ? delete data?.dataValues?.password
    : delete data?.password;

  return data;
};

// edit-user
exports.updateUser = async (id, payload) => {
  let data = await updateUser(id, payload);

  // delete password
  data[0]?.dataValues?.password
    ? delete data[0]?.dataValues?.password
    : delete data?.password;

  return data;
};

// delete
exports.deleteUser = async (id) => (data = await deleteUser(id));

exports.changePassword = async (id, payload) => {
  const user = await findUserById(id);
  if (!user) {
    throw new Error("User not found!");
  }

  const isPasswordValid = await bcrypt.compare(
    payload.current_password,
    user.password
  );
  if (!isPasswordValid) {
    throw new Error("Wrong password!");
  }

  const newUserPassword = await bcrypt.hashSync(payload.new_password, 10);

  const updatedUser = await updateUser(id, {
    ...user,
    password: newUserPassword,
  });
  return updatedUser;
};
