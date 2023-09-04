const { Suscriber, Writer, WriterSuscriber } = require('../database/models');
const sendEmail = require('../mails/sendEmails');

module.exports = {
    getRegister: async (req, res) => {
        try {
            const findWriter = await Writer.findByPk(1);
            res.render('home', {
                error: {},
                writer: findWriter
            })
            console.log(findWriter);
        } catch (error) {
            console.log(error);
        }
    },

    postRegister: async (req, res) => {
        let email = req.body.emailSuscriber;
        let writerId = req.body.writerId;
        console.log(writerId);
        // Primero se comprueba si no existe un usuario con ese mail
        try {
            const [suscriber, created] = await Suscriber.findOrCreate({
                where: { email: email },
                defaults: { email: email },
            })
            // En caso de que se haya creado un usuario nuevo, se crea un registro en la tabla intermedia WriterSuscriber con el id del nuevo usuario y una vez hecho eso se le envía el mail que le confirma que está suscripto.
            if (created) {
                await WriterSuscriber.create({
                    writer_id: writerId,
                    suscriber_id: suscriber.id
                }).then(() => {
                    let html = `<h1>Gracias por suscribirte</h1>`;
                    let content = 'Si llegaste hasta acá probablemente estés interesado en la tecnología como yo. Te doy la bienvenida a este proyecto personal en el que comparto la visión de personas que trabajan en el mundo de sistemas. Espero lo disfrutes. Bienvenido/a!'
                    sendEmail('Bienvenido/a', html, content, email);

                    setTimeout(() => {
                        res.render('welcome');
                    }, 2000);
                })

            } else {
                res.render('home', {
                    error: {
                        msg: 'El mail ya está registrado',
                    },
                    writer: writerId,
                });
            }
        } catch (error) {
            console.log(error);
        }
    }
}