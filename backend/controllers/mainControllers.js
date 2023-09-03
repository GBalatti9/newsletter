const { Suscriber } = require('../database/models');

module.exports = {
    getRegister: (req, res) => {
        res.render('home', {
            error: {}
        })
    },

    postRegister: async (req, res) => {
        let email = req.body.emailSuscriber;
        try {
            const findEmail = Suscriber.findOne({
                where: {
                    email: email
                }
            })
            if (!findEmail) {
                await Suscriber.create({
                    email: email
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