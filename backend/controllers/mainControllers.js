module.exports = {
    getRegister: (req, res) => {
        res.render('home')
    },

    postRegister: (req, res) => {
        console.log(req.body);
        res.send('Registro con exito');
    }
}