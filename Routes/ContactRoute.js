/*
    Autor: Eliezer Cocom Cruz
    Fecha creación: 01/08/2022
    Descripción: Configuración de rutas
*/

const { Router } = require('express');
const { getContacts, getContactsByID, deleteContactsByID } = require('../Controllers/ContactController');
const router = Router();

/* Configuración de ruta para obtener los contactos */
router.get(
    '/',
     getContacts
);

/* Configuración de ruta para obtener el contacto por ID */
router.get('/:id', getContactsByID);

/* Configuración de ruta para obtener el contacto por ID */
router.delete('/:id', deleteContactsByID);

module.exports = router;