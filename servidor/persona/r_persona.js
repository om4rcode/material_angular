'use strict'
let express = require('express'),
    api     = express.Router(),
    C_persona = require('./c_persona');

api
    .get('/getPersonas', C_persona.getPersonas)
    .post('/insertarPersona', C_persona.insertarPersona)
    .post('/editarPersona', C_persona.editarPersona)
    .delete('/eliminarPersona', C_persona.eliminarPersona)

module.exports = api;