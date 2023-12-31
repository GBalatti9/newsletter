const express = require('express');
const path = require('path');
const methodOverride = require('method-override');

const app = express();

const { mainRoutes, adminRoutes, writingRoutes, loginRoutes } = require('./routes');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
app.use(methodOverride('_method'));

app.set('view engine', 'ejs');
app.set('views', [
    path.join(__dirname, './views/'),
    path.join(__dirname, './views/admin'),
    path.join(__dirname, './views/content'),
])

app.use(mainRoutes);
app.use(adminRoutes);
app.use('/user' ,writingRoutes);
app.use(loginRoutes)

app.listen(3000, () => console.log('Servidor escuchando en el puerto http://localhost:3000/ 🚀'))