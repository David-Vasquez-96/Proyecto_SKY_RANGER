var requestt = require('request');
let errors  = require('../middlewares/errors'),
    express = require('express');

class peticiones {
  peticion(url,callback) {
    setTimeout(function(){
      requestt.get(url, (error, responsee, body) => {
        if(error) {
            return console.dir(error);
            //aca responderemos algo si se produce un error.
        }else{
          var datos= JSON.parse(body);
          callback(datos);
        }
      });
    }, 0 | Math.random() * 100);
  }
}module.exports = peticiones;