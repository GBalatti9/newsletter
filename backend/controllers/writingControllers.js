const { Newsletter, WriterSuscriber } = require('../database/models');
const sendEmails = require('../mails/sendEmails');

module.exports = {
    getBoard: (req, res) => {
        res.render('write', {id: req.params.id});
    },

    postNewsletter: async (req, res) => {
        console.log(req.params.id);
        try {
            const postContent = await Newsletter.create({
                id_user_creator: req.params.id,
                content: req.body.h1Title
            })
            console.log(postContent);
            res.send('Newsletter cargado con éxito');
        } catch (error) {
            console.log(error);
        }
    }
}