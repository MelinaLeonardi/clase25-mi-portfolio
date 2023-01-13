//generamos sistema de ruteo
//const express = require("express");>>como solo voy a necesitar el router, hago DESTRUCTURING y escribo:
//hago destructuring de la funcion de la funcion de requerir express
const {Router}=require("express");
//requerimos mainController al importarlo y lo sacamos de app.js porque ya no lo necesitamos
const mainController = require("../controllers/main-controller");//SALGO DE LA CARPETA ROUTER PERO DENTRO DE SRC ENTRO A LA CARPETA CONTROLLERS
//con ese router creo otro router,al igual que haciamos con la app 
const router =Router();

//le declaro las rutas pertinientes
// a  partir de aca separamos las rutas, controladores(comportamientos) en archivos aparte
router.get ("/", mainController.home );//cambio app.get por router.get
router.get("/about", mainController.aboutUs);//cambio app.get por router.get


//exporto router
module.exports=router;