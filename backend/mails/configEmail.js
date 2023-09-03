const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: 'gas.balatti@gmail.com',
        pass: 'izgqtlxxpxaszdco'
    }
})

module.exports = transporter;
