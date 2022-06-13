const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');

const app = express();

//Conexión BD
const mongoose = require('mongoose');
const url = 'mongodb://localhost:27017/Poke-web';




app.get('/', function (req, res) {
    res.send('hola mundo');
});

app.listen(3000, function () {
    console.log('Escuchando el puerto 3000');
});