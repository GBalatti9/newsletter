const { Suscribers } = require('../database/models');

module.exports = {
    getTableUsers: (req, res) => {
        res.render('user_admin');
    }
}