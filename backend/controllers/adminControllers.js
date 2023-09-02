const { Suscriber } = require('../database/models');

module.exports = {
    getTableUsers: async (req, res) => {
        const suscribers = await Suscriber.findAll();
        res.render('user_admin', { suscribers });
    },

    deleteUser: async (req, res) => {
        try {
            const suscriberId = req.body.id;
            console.log(suscriberId);
            await Suscriber.update(
                {
                    deleted_at: new Date(),
                },
                {
                    where: {
                        id: suscriberId
                    }
                }
            );
        } catch (error) {
            console.log(error);
        }
        res.redirect('/');
    }
}