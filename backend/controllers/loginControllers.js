const { Writer } = require('../database/models');

module.exports = {
    getLogin: async (req, res) => {
        res.render('loginCreator', {error: {}})
    },

    postLogin: async (req, res) => {
        let email = req.body.emailLogin;
        try {
            const findWriter = await Writer.findOne({
                where: {
                    email: email
                }
            })
            res.redirect(`/user/${findWriter.id}/content-creator`);
        } catch (error) {
            console.log(error);
        }
    }
}