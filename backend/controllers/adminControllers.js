const { Suscriber } = require('../database/models');

module.exports = {
    getTableUsers: async (req, res) => {
        const suscribers = await Suscriber.findAll();
        res.render('user_admin', { suscribers });
    },

    deleteUser: async (req, res) => {
        const suscriber = await Suscriber.destroy({
            where: {
                id: 1
            }
        });
    }
}