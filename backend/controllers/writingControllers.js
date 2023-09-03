const { Newsletter } = require('../database/models');
const sendEmails = require('../mails/sendEmails');

module.exports = {
    getBoard: (req, res) => {
        res.render('write');
    },

    postNewsletter: async (req, res) => {
        try {
            await Newsletter
        } catch (error) {
            
        }
        res.send('Newsletter cargado con éxito');
    }
}