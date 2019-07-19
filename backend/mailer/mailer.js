const nodemailer = require('nodemailer');
let ejs = require('ejs');

//create reusable transporte object using the defaults SMTP transport
let transporter = nodemailer.createTransport({
  service: 'gmail', //nom d'hote auquel se connecter
  port: process.env.MAIL_PORT, // port 587 si sécurisé est false ou 465 si true
  secure: true, // upgrade later with STARTTLS
  auth: {
    user: process.env.MAIL_SENDER,
    pass: process.env.MAIL_PASSWORD
  }
});

const getMailObject = (mailType) => {
  switch (mailType) {
    case 'welcome':
      return 'Bienvenue sur notre app'
    case 'resetPassword':
      return 'Reinitialisation du mot de passe'
    case 'participateMaraude':
      return 'Demande de participation envoyé'
    case 'contactAdmin':
      return 'Message envoyé'
  }
}

const getMailContent = (mailType) => {
  switch (mailType) {
    case 'welcome':
      return "/templates/welcome_email.ejs"
    case 'resetPassword':
      return "/templates/forgetPassword.ejs"
    case 'participateMaraude':
      return "/templates/maraudes.ejs"
    case 'contactAdmin':
      return "/templates/contact.ejs"
  }
}

//TODO get default value from .env
const Mailer = (userDatas, recipient = process.env.MAIL_SENDER, mailType = "contactAdmin") => {
  console.log("SEND EMAIL", userDatas, recipient, mailType)
  ejs.renderFile(__dirname + getMailContent(mailType), { ...userDatas },
    function (err, data) {
      if (err) {
        console.log(err);
      } else {
        // setup email data with unicode symbols
        const mailOptions = {
          from: process.env.MAIL_SENDER, // sender address
          to: recipient, // list of receivers
          subject: getMailObject(mailType), // Subject line
          html: data // plain text body
        };
        transporter.sendMail(mailOptions, function (err, info) {
          if (err) {
            console.log(err);
            //TODO MANAGE ERROR
          } else {
            console.log('Message sent: ' + info.response);
            //TODO MANAGE RESPONSE
            // res.render('contact', {msg:'Email has been sent'});
          }
        });
      }
    });
}

module.exports = Mailer;