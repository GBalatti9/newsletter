const sendEmails = require('../mails/sendEmails');

module.exports = {
    getBoard: (req, res) => {
        res.render('write');
    },

    postNewsletter: async (req, res) => {
        let infoToString = req.body.h1Title.toString();
        await sendEmails('Envio desde la carga del newsletter', infoToString, 'gas.balatti@gmail.com');
        res.send('Newsletter cargado con éxito');
    }
}