const { Suscriber } = require('../database/models');
const sendEmail = require('../mails/sendEmails');

module.exports = {
    getRegister: (req, res) => {
        res.render('home', {
            error: {}
        })
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
                    sendEmail('Bienvenido', '', email),
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