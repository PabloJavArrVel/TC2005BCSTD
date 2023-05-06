//Pablo Javier Arreola Velasco A01747824
//Francisco Couttolenc Ortiz A01754959
const express = require('express');
const bodyParser = require("body-parser");
const session = require('express-session');
const app = express();
const path = require('path');
const cookieParser = require('cookie-parser');

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));



const routes = require('./routes/chess.routes.js');

app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.use('/', routes);

app.use(session({
  secret: 'mi string secreto que debe ser un string aleatorio muy largo, no como éste', 
  resave: false, //La sesión no se guardará en cada petición, sino sólo se guardará si algo cambió 
  saveUninitialized: false, //Asegura que no se guarde una sesión para una petición que no lo necesita
}));

app.listen(9000, function() {
  console.log('Server listening on port 9000');
});
