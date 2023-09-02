const express = require('express');
const path = require('path');

const app = express();

const { mainRoutes, adminRoutes } = require('./routes');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.set('view engine', 'ejs');
app.set('views', [
    path.join(__dirname, './views/admin'),
])

app.use(mainRoutes);
app.use(adminRoutes);

app.listen(3000, () => console.log('Servidor escuchando en el puerto http://localhost:3000/ 🚀'))