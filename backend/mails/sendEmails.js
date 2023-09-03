
const transporter = require('./configEmail');

const sendEmail = async (subject, html, content, ...to) => {

    const optionMail = {
        from: 'gas.balatti@gmail.com',
        to: to,
        subject: subject,
        // html: `<h1>Gracias por suscribirte</h1> <p>Si llegaste hasta acá probablemente estés interesado en la tecnología como yo. Te doy la bienvenida a este proyecto personal en el que comparto la visión de personas que trabajan en el mundo de sistemas. Espero lo disfrutes. Bienvenido/a!</p>`,
        text: content,
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