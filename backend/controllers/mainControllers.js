const { Suscriber, Writer } = require('../database/models');
const sendEmail = require('../mails/sendEmails');

module.exports = {
    getRegister: async (req, res) => {
        try {
            const findWriter = await Writer.findByPk(1);
            res.render('home', {
                error: {},
                writer: findWriter
            })
        } catch (error) {
            console.log(error);
        }
    },

    postRegister: async (req, res) => {
        let email = req.body.emailSuscriber;
        try {
            const findEmail = await Suscriber.findOne({
                where: {
                    email: email
                }
            })
            console.log(!findEmail);
            if (!findEmail) {
                await Suscriber.create({
                    email: email
                }).then(() => {
                    let html = `<h1>Gracias por suscribirte</h1>`;
                    let content = 'Si llegaste hasta acá probablemente estés interesado en la tecnología como yo. Te doy la bienvenida a este proyecto personal en el que comparto la visión de personas que trabajan en el mundo de sistemas. Espero lo disfrutes. Bienvenido/a!'
                    sendEmail('Bienvenido/a', html, content, email),
                    res.render('welcome')
                })
            } else {
                res.render('home', {
                    error: {
                        msg: 'El mail ya está registrado',
                    }
                });
            }
        } catch (error) {
            console.log(error);
        }
    }
}