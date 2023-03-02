//Francisco Couttolenc Ortíz A01754959
//Pablo Javier Arreola Velasco A01747824

const express = require('express');

const comidas = require('./routes/comidas');

const juegos = require('./routes/juegos');

const app = express();

app.use('/comidas', comidas);

app.use('/juegos', juegos);

app.use((request, response, next) => {
    const error = new Error('No hay nada aquí');
    error.status = 404;
    next(error);
  });

app.listen(5000);