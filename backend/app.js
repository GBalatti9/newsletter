const express = require('express');

const app = express();

const { mainRoutes } = require('./routes');

app.use(mainRoutes)

app.listen(3000, () => console.log('Servidor escuchando en el puerto http://localhost:3000/ 🚀'))