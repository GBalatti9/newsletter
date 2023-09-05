const { Newsletter, WriterSuscriber, Writer } = require('../database/models');
const sendEmails = require('../mails/sendEmails');

module.exports = {
    getBoard: (req, res) => {
        res.render('write', {id: req.params.id});
    },

    postNewsletter: async (req, res) => {
        console.log(req.params.id);
        let date = req.body.programmingDate;
        let content = req.body.h1Title;
        try {
            const postContent = await Newsletter.create({
                id_user_creator: req.params.id,
                content: content,
                release_date: date,
                send: 0,
            })
            console.log(postContent);
            res.redirect(`/user/${req.params.id}/content-creator`);
        } catch (error) {
            console.log(error);
        }
    },

    postSendNow: async (req, res) => {
        try {
            const writer = await Writer.findByPk(req.params.id);
            const suscribers = await writer.getSuscriptores();
            const emails = suscribers.map((suscriptor) => suscriptor.email);
            const findNewsletter = await Newsletter.findAll({
                where: {
                    id_user_creator: req.params.id
                }
            })
            let lastNewsletter = findNewsletter[findNewsletter.length - 1]
            console.log('LAST NEWSLETTER' ,lastNewsletter);
            console.log('LAST NEWSLETTER CONTENIDO', lastNewsletter.dataValues.content);

            emails.forEach(email => {
                let html = `<h1>Funcionamiento de mails</h1>`
                sendEmails('Prueba de envio', html, lastNewsletter.dataValues.content, email);
            })

        } catch (error) {
            console.log(error);
        }
    }
}