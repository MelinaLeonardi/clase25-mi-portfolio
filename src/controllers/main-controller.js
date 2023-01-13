//creamos el controlador
//controlador principal que va a tener todos los comportamientos de las rutas principales>FUNCIONES CONTROLADORAS PRINCIPALES
//requiero path para las rutas
const path=require('path');
//EXPORTO LAS FUNCIONES
module.exports = {
  home: (req, res) => {
    res.sendFile(path.join(__dirname, "../views/home.html"));
  },

  aboutUs: (req, res) => {
    res.sendFile(path.join(__dirname, "../views/about.html"));
  },
};
