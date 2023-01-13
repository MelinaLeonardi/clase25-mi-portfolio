const express = require('express');//requerimos express y nos la guardamos en una variable
//REQUIERO PATH PARA LUEGO PODER UTILIZARLO  PARA QUE ME DE LA RUTA RELATUVA HACIA LA CARPETA PUBLIC
const path=require('path');



const mainRouter=require('./routers/main-router');

const app = express(); //ejecuto express y me devuelve una aplicacion> funcion>>CONFIGURO EXPRESS


//CONFIGURAMOS SERVIDOR>> lo inutilizo porque utilizo la variable PORT 
//app.listen(3001, () => {
  //console.log('Servidor funcionando');
//});

//servidor para el render
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Se prendió en el puerto ${PORT}`);
});

//LE INDICO AL SERVIDOR DONDE ESTA LA CARPETA DE ARCHIVOS PUBLICOS>/PUBLIC
app.use(express.static(path.join(__dirname, "../public")));

//vincular app.js con el sistema de ruteo
app.use(mainRouter)//como no lo va a conocer requerimos mainRouter

