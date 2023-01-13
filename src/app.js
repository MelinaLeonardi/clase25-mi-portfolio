const express = require('express');//requerimos express y nos la guardamos en una variable
//REQUIERO PATH PARA LUEGO PODER UTILIZARLO  PARA QUE ME DE LA RUTA RELATUVA HACIA LA CARPETA PUBLIC
const path=require('path');



const mainRouter=require('./routers/main-router');

const app = express(); //ejecuto express y me devuelve una aplicacion> funcion>>CONFIGURO EXPRESS


//CONFIGURAMOS SERVIDOR
app.listen(3001, () => {
  console.log('Servidor funcionando');
});

//LE INDICO AL SERVIDOR DONDE ESTA LA CARPETA DE ARCHIVOS PUBLICOS>/PUBLIC
app.use(express.static(path.join(__dirname, "../public")));

//vincular app.js con el sistema de ruteo
app.use(mainRouter)//como no lo va a conocer requerimos mainRouter

