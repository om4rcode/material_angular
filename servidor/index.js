'use strict'
const pgpromise = require("pg-promise")(),
      db        = pgpromise("postgres://postgres:postgres@localhost:5433/registro_personas"),
      app       = require('./app'),
      port      = process.env.PORT || 3000;
/*** */
db.connect();
app.listen(port, ()=> {
    console.log('Levanto correctamente el puerto ' + port);
});

exports.conection = db;
exports.pgpromise = pgpromise;