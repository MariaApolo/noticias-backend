const express = require('express');
const bodyParser = require('body-parser'); //para gestionar peticiones de tipo post
const apiRouter = require('./routes/api')
const http = require('http');
const cors = require('cors');

const app = express();

require('./db');

app.use(bodyParser.json()); //levanto un middleware
app.use(bodyParser.urlencoded({ extended: true}));
app.use(cors());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'X-auth-token, Authorization, X-API-KEY, Origin, X-Request-With, Content-Type, Accept, Access-Control-Allow-Request-Method, x-access-token');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, OPTIONS, DELETE');
    res.header('Allow', 'GET, POST, PUT, OPTIONS, DELETE');
    next();
  });
  
app.use('/api', apiRouter); //todas las rutas que entren a /api/ seran gestionadas por apiroutes
app.listen(3000, ()=> {//funcion anonima que se ejecuta cuando se levanta el servidor
    console.log('Server is running');
})