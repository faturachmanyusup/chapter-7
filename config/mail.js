require('dotenv').config();
const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
  service: 'SendinBlue',
  auth: {
    user: process.env.MAIL_EMAIL, // generated ethereal user
    pass: process.env.MAIL_PASS, // generated ethereal password
  },
});


// if using google SMTP server
// let transporter = nodemailer.createTransport({
//   host: process.env.MAIL_HOST,
//   port: process.env.MAIL_PORT,
//   secure: false, // true for 465, false for other ports
//   auth: {
//     user: process.env.MAIL_EMAIL, // generated ethereal user
//     pass: process.env.MAIL_PASS, // generated ethereal password
//   },
// });

module.exports = transporter;