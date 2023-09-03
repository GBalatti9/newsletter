
const transporter = require('./configEmail');

const sendEmail = async (subject, content, ...to) => {

    const optionMail = {
        from: 'gas.balatti@gmail.com',
        to: to,
        subject: subject,
        text: content,
        html: `<h1>Gracias por suscribirte</h1>`
    }

    transporter.sendMail(optionMail, (error, info) => {
        if(error){
            console.error('Error al enviar el mail', error);
        } else {
            console.log('Mail enviado con exito', info.response);
        }
    })
}

module.exports = sendEmail