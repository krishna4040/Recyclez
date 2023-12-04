const { ndConnect } = require("../config/ndConnect");
require("dotenv").config();

exports.sendMail = async (to, subject, template) => {
  // t-s-t
  try {
    const transporter = ndConnect();
    const info = (await transporter).sendMail({
      from: process.env.MAIL_USER,
      to: to,
      subject: subject,
      html: template,
    });
    if (!info || !transporter) {
      throw new Error("smth went wrong while sending email");
    } else {
      console.log("Mail sent successfully =>", info);
    }
  } catch (error) {
    console.log(error);
  }
};
