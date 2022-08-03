/*
    Autor: Eliezer Cocom Cruz
    Fecha creación: 01/08/2022
    Descripción: Configuración de servidor express
*/

const express = require('express');
const cors = require('cors');

//Crear servidor express
const app = express();

//Cors
app.use(cors());

//Directorio público
app.use(express.static('public'));

//Configuración de HEADER
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE, OPTIONS");
    res.header('Content-Type', 'application/json');
    next();
});

//Lectura y parseo del body
app.use(express.json());

//Rutas de los módulos
app.use('/api/contacts', require('./Routes/ContactRoute'));

//Configuración de puerto
const PORT_LOCAL = 3000;
app.listen(process.env.PORT || PORT_LOCAL, () => {
    console.log(`Servidor corriendo en el puerto ${process.env.PORT || PORT_LOCAL}`);
});

/* URL: http://localhost:3000/api/contacts/ */