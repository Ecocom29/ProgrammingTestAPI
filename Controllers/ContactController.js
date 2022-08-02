const { response } = require('express');
const { dbContacts } = require('../DataBase/fakedatabase');

const getContacts = (req, res = response) => {

    const contacts = [];

    dbContacts.map(data => {

        contacts.push(data);

    });

    console.log(contacts);

    res.status(200).json({
        ok: true,
        user: contacts
    });
}

const getContactsByID = (req, res = response) => {

    const contactID = req.params.id;
    
    console.log(contactID);

    let contacts = [];

    dbContacts.map(data => {
        if (data.id == contactID) {
            contacts = data;            
        }        
    });

    console.log(contacts)

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

const deleteContactsByID = (req, res = response) => {

    const contactID = req.params.id;
    
    console.log(contactID);

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
    

    res.status(200).json({
        ok: true,
        msg: `Se elimino el contacto con ID ${contactID}.`,
        count: dbContacts.length
    });
}

module.exports = {
    getContacts,
    getContactsByID
}