const { Suscriber } = require('../database/models');

module.exports = {
    getTableUsers: async (req, res) => {
        await Suscriber.findAll().then(resultado => console.log(resultado));
        res.render('user_admin');
    }
}