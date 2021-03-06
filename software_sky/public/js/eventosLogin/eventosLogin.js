//modulo para agregarle funcionaliad al boton NUEVO de la pagina principal
var eventosLogin = function(){
	var _private = {}, _public = {};

	_public.__construct = function() {
		return _public;
	};

	_public.iniciar=function(){
		_private.agregarEventoAbotonIngresar();
    _private.asignarFormulario();
		_private.funcionLimpiar();
	};

	_private.funcionLimpiar=function(){
		document.getElementById("formlogin").reset();
	};

//funcion para agregar evento a boton ingresar
	_private.agregarEventoAbotonIngresar=function(){
		$("#btnlogin")[0].addEventListener('click', function(event) {
	  console.log("se hizo clic en el boton ingresar");
    _private.validarFormulario(); //llamamos a funcion que valida el form
		});
	}

//funcion para validar el formularios
_private.validarFormulario=function(){
  var esFormularioValido=_private.formulario.checkValidity();
  console.log("estado de formulario = ",esFormularioValido);
  if(esFormularioValido == true){
    console.log("guardemos la info")
    //si el formulario es valido aca haremos la peticion
    _private.enviarPeticionApiDeLogin();
  }//fin del if
}//fin de funcion

//fucnion para hacer peticion a API  con los datos que el usuario ingreso.
_private.enviarPeticionApiDeLogin = function(){
  var usuario= document.getElementById("usuario").value;
  var contraseña= document.getElementById("contraseña").value;
  $.ajax({
      url: 'http://localhost:8000/login',
      type: "POST",
      data: {
        usuario,
        contraseña
      }
    }).done(function(data){
        //respuesta de ajax
        console.log(data);
        //location.href = "http://localhost:8000/inicio";
    })

}//fin de funcion de peticion a api.

//funcion para asignar el formularios
_private.asignarFormulario=function(){
  var elementos = $("form"); //funcion para ver si el formulaio se cargo.
  if (elementos.length==0){
    console.log("formulario de login no encontrado");
  }else{
    _private.formulario=elementos[0];
    console.log("elementos"+ elementos[0]);
  }//fin del if
}//fin de la funcion

	return _public.__construct.apply(this, arguments);
}
var eventos = new eventosLogin();
document.addEventListener('DOMContentLoaded',eventos.iniciar() , false);
