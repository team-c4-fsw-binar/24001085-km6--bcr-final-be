const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 465,
  secure: false,
  auth: {
    user: process.env.EMAIL_USERNAME,
    pass: process.env.EMAIL_PASSWORD,
  },
});

exports.sendOtpEmail = async (email, otp, user) => {
  const mailOptions = {
    from: process.env.EMAIL_USERNAME,
    to: email,
    subject: "Kode OTP TerbangAja",
    html: `
    <div
    style="
      font-family: Helvetica, Arial, sans-serif;
      min-width: 1000px;
      overflow: auto;
      line-height: 2;
    "
    >
      <div style="margin: 50px auto; width: 70%; padding: 20px 0">
        <div style="border-bottom: 4px solid #b3b3b3; text-align: center; margin: 0; padding: 0;">
          <a 
            href=""
            style="
              text-decoration: none;
              margin: 0;
              padding: 0;
              ">
            <img
              src="https://res.cloudinary.com/dv2jeayrr/image/upload/v1717437197/jac1mqn85cwjyxcamadd.png"
              style="object-fit: cover; width: 125px; height: 125px; margin: 0 auto;"
            />
            <p
              style="
                font-size: 1.4em;
                color: #7224be;
                font-weight: bold;
                display: block;
                margin: 0 auto;
              "
            >
              TerbangAja
            </p>
          </a>
        </div>
        <p style="font-size: 1.1em">Hai, ${user}</p>
        <p>
          Terima kasih telah memilih <span style="color: #7224be; font-size: 1em; font-weight: bold;" >TerbangAja</span>. Gunakan OTP berikut untuk
          menyelesaikan proses Pendaftaran Anda. OTP berlaku selama 60 detik.
        </p>
        <h2
          style="
            background: #7224be;
            margin: 0 auto;
            width: max-content;
            padding: 0 10px;
            color: #fff;
            border-radius: 4px;
          "
        >
          ${otp}
        </h2>
        <p style="font-size: 0.9em">
          Salam,<br />
          <span style="color: #7224be; font-size: 1em; font-weight: 800;">TerbangAja</span>
        </p>
        <hr style="border: none; border-top: 4px solid #b3b3b3" />
        <div
          style="
            float: right;
            padding: 8px 0;
            color: #b3b3b3;
            font-size: 0.8em;
            line-height: 1;
            font-weight: 300;
            text-align: right;
          "
        >
          <p>TerbangAja</p>
          <p>Indonesia</p>
        </div>
      </div>
    </div>
    `,
  };

  await transporter.sendMail(mailOptions);
};

exports.sendResetPasswordEmail = async (email, link) => {
  const mailOptions = {
    from: process.env.EMAIL_USERNAME,
    to: email,
    subject: "Password Reset",
    html: `
    <div
    style="
      font-family: Helvetica, Arial, sans-serif;
      min-width: 1000px;
      overflow: auto;
      line-height: 2;
    "
    >
      <div style="margin: 50px auto; width: 70%; padding: 20px 0">
        <div style="border-bottom: 4px solid #b3b3b3; text-align: center; margin: 0; padding: 0;">
          <a 
            href=""
            style="
              text-decoration: none;
              margin: 0;
              padding: 0;
              ">
            <img
              src="https://res.cloudinary.com/dv2jeayrr/image/upload/v1717437197/jac1mqn85cwjyxcamadd.png"
              style="object-fit: cover; width: 125px; height: 125px; margin: 0 auto;"
            />
            <p
              style="
                font-size: 1.4em;
                color: #7224be;
                font-weight: bold;
                display: block;
                margin: 0 auto;
              "
            >
              TerbangAja
            </p>
          </a>
        </div>
        <p style="font-size: 1.1em">Hai, ${user}</p>
        <p>
          Klik Link dibawah ini untuk melanjutkan proses reset password.
        </p>
        <a 
          href="${link}"
          target="_blank"
          style="text-decoration: none;" 
        >
          <button
            class="reset-button"
          >
            Reset Password
          </button>
        </a>
        <p style="font-size: 0.9em">
          Salam,<br />
          <span style="color: #7224be; font-size: 1em; font-weight: 800;">TerbangAja</span>
        </p>
        <hr style="border: none; border-top: 4px solid #b3b3b3" />
        <div
          style="
            float: right;
            padding: 8px 0;
            color: #b3b3b3;
            font-size: 0.8em;
            line-height: 1;
            font-weight: 300;
            text-align: right;
          "
        >
          <p>TerbangAja</p>
          <p>Indonesia</p>
        </div>
      </div>
    </div>

    <style>
      .reset-button {
        background: #7224be;
        justify-content: center;
        display: flex;
        margin: 0 auto;
        width: max-content;
        padding: 15px;
        color: #fff;
        border-radius: 4px;
        font-size: large;
        border: none;
        cursor: pointer;
      }

      .reset-button:hover {
        background: #931fff;
      }
    </style>
    `,
  };

  await transporter.sendMail(mailOptions);
};
