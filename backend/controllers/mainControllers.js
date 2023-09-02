const { Suscriber } = require('../database/models');

module.exports = {
    getRegister: (req, res) => {
        res.render('home')
    },

    postRegister: async (req, res) => {
        let email = req.body.emailSuscriber;
        try {
            await Suscriber.create({
                email: email
            })
        } catch (error) {
            console.log(error);   
        }
        res.send('Registro con exito');
    }
}