//PARTS 1
//TODO send email to your personnal email adress

const nodemailer = require('nodemailer');
let ejs = require('ejs'),
    people = ['geddy', 'neil', 'alex'],
    html = ejs.render('<%= people.join(", "); %>', { people: people });
//create reusable transporte object using the defaults SMTP transport 
let transporter = nodemailer.createTransport({
    host: "smtp.live.com", //nom d'hote auquel se connecter 
    port: 25, // port 587 si sécurisé est false ou 465 si true
    secure: false, // upgrade later with STARTTLS
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



const Mailer = (userDatas, recipient = 'Coiffla@hotmail.com', mailType = "contactAdmin") => {
    console.log('Mailer')

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
                // console.log("html data ======================>", mailOptions.html);
                transporter.sendMail(mailOptions, function (err, info) {
                    if (err) {
                        console.log(err);
                    } else {
                        console.log('Message sent: ' + info.response);
                        // res.render('contact', {msg:'Email has been sent'});
                    }
                });
            }
        });
}

module.exports = Mailer;