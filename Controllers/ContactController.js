/*
    Autor: Eliezer Cocom Cruz
    Fecha creación: 01/08/2022
    Descripción: Generación de peticiones a la BD.
*/

const { response } = require('express');
const { dbContacts } = require('../DataBase/fakedatabase');

/* Obtiene la lista de contactos */
const getContacts = (req, res = response) => {

    const contacts = [];

    dbContacts.map(data => {
        contacts.push(data);
    });

    res.status(200).json({
        ok: true,
        user: contacts
    });
}

/* Obtiene el contacto mediante su ID */
const getContactsByID = (req, res = response) => {

    const contactID = req.params.id;

    let contacts = [];

    dbContacts.map(data => {
        if (data.id == contactID) {
            contacts = data;            
        }        
    });

    if (contacts.length <= 0) {
        return res.status(404).json({
            ok: false,
            msg: `El contacto con ID ${contactID}, no existe.`
        });
    }

    res.status(200).json({
        ok: true,
        contact: contacts
    });
}

/* Elimina un contacto mediante su ID */
const deleteContactsByID = (req, res = response) => {

    const contactID = req.params.id;

    const contacts = [];

    dbContacts.map(data => {
        if (data.id == contactID) {
            contacts.push(data);                       
        }        
    });

    if (contacts.length <= 0) {
        return res.status(404).json({
            ok: false,
            msg: `El contacto con ID ${contactID}, no existe.`
        });
    }    

    contacts.map(data => {
        if (data.id == contactID) {
            contacts.splice(data);                       
        }        
    });

    res.status(200).json({
        ok: true,
        msg: `Se elimino el contacto con ID ${contactID}.`,
        count: dbContacts.length
    });
}

module.exports = {
    getContacts,
    getContactsByID,
    deleteContactsByID
}