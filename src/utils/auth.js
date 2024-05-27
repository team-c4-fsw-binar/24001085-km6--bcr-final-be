const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  host: 'smtp.gmail.com',
  port: 465,
  secure: false,
  auth: {
    user: process.env.EMAIL_USERNAME,
    pass: process.env.EMAIL_PASSWORD
  }
});

exports.sendOtpEmail = async (email, otp) => {
  const mailOptions = {
    from: process.env.EMAIL_USERNAME,
    to: email,
    subject: 'OTP Code for TerbangAja',
    html : `
      <div style="font-family: Helvetica,Arial,sans-serif;min-width:1000px;overflow:auto;line-height:2">
      <div style="margin:50px auto;width:70%;padding:20px 0">
        <div style="border-bottom:1px solid #eee">
          <a href="" style="font-size:1.4em;color: #00466a;text-decoration:none;font-weight:600">TerbangAja</a>
        </div>
        <p style="font-size:1.1em">Hi,</p>
        <p>Thank you for choosing TerbangAja. Use the following OTP to complete your Sign Up procedures. OTP is valid for 15 minutes</p>
        <h2 style="background: #00466a;margin: 0 auto;width: max-content;padding: 0 10px;color: #fff;border-radius: 4px;">${otp}</h2>
        <p style="font-size:0.9em;">Regards,<br />TerbangAja</p>
        <hr style="border:none;border-top:1px solid #eee" />
        <div style="float:right;padding:8px 0;color:#aaa;font-size:0.8em;line-height:1;font-weight:300">
          <p>TerbangAja</p>
          <p>Terbang Aja Company</p>
          <p>Indonesian</p>
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
    subject: 'Password Reset',
    text: `Click on the following link to reset your password: ${link}`,
  };

  await transporter.sendMail(mailOptions);
};