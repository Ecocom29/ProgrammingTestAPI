/*
    Rutas de usuario / auth
    Host + /api/auth
*/

const { Router } = require('express');
const { getContacts, getContactsByID } = require('../Controllers/ContactController');
const router = Router();

router.get(
    '/',
     getContacts
);

/* Ruta para obtener usuario con UID */
router.get('/:id', getContactsByID);

module.exports = router;