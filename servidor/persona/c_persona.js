'use strict'
let M_persona = require('./m_persona');

function getPersonas(req, res) {
    let id_persona = req.query.id_persona ? req.query.id_persona : null;
    M_persona.getPersonas(id_persona).then(resolved => {
        res.status(200).send(id_persona ? resolved [0] : resolved);
    }).catch(err => {
        console.log(err);
        res.status(500).send(err);
    });
}

function insertarPersona(req, res) {
    try {
        let datos = req.body;
    console.log(datos)
    if(!datos.nom_persona || !datos.correo) throw {status : 400 ,msj : "Accion no permitida!"};
    if(!datos.nom_persona.length > 50) throw {status : 400, msj : "Accion no permitida!"};
    M_persona.insertarPersona(datos).then(resolved => {
        console.log(resolved)
        res.status(200).send(resolved);
    }).catch(err => {
        res.status(500).send(err);
    });
    } catch (err) {
        if(err.status) res.status(err.status).send(err);
        else res.status(500).send({msj : "Erro no controlado"});
    }
}

function editarPersona(req, res) {
    let datos = req.body;
    M_persona.editarPersona(datos).then(resolved => {
        res.status(200).send(resolved);
    }).catch(err => {
        console.log(err);
        res.status(500).send(err);
    });
}

function eliminarPersona(req, res) {
    let id_persona = req.query.id_persona;
    M_persona.eliminarPersona(id_persona).then(resolved => {
        res.status(200).send(resolved);
    }).catch(err => {
        console.log(err);
        res.status(500).send(err);
    });
}



module.exports = {
    getPersonas,
    insertarPersona,
    editarPersona,
    eliminarPersona
}