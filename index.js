const { response } = require('express');
const express = require('express');
const cors = require('cors');


//Crear servidor express
const app = express();

//Cors
app.use(cors());

//enable CORS for request verbs
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE, OPTIONS");
    next();
});

//Directorio publico
app.use(express.static('public'));

//Lectura y parseo del body
app.use(express.json());

//Rutas de los modulos
app.use('/api/contacts', require('./Routes/ContactRoute'));

//Connection PORT
const PORT_LOCAL = 3000;
app.listen(process.env.PORT || PORT_LOCAL, () => {
    console.log(`Servidor corriendo en el puerto ${process.env.PORT || PORT_LOCAL}`);
});