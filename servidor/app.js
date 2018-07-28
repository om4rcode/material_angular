let express    = require('express'),
    bodyParser = require('body-parser'),
    api        = express(),
    cors       = require('cors');

/**Cargar las rutas */
let r_persona = require('./persona/r_persona');

api
    /**Analizar los cuerpos de solicitud entrantes */
    .use(bodyParser.json())
    .use(bodyParser.urlencoded({extended : false}))
    /**habilitar todas las solicitudes CORS */
    .use(cors())//permisos
    .use('',r_persona)

module.exports = api;