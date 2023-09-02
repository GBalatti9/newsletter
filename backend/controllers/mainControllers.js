module.exports = {
    getLogin: (req, res) => {
        res.render('home')
    },

    postLogin: (req, res) => {
        res.send('login');
    }
}