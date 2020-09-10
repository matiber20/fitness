var prueba = "variable de prueba desde test03";
var usuario = document.getElementById('nombre1');
var apellido = document.getElementById('apellido1');
var mail = document.querySelector('#email1');
var boton = document.getElementById('enviar');


function validarDatos() {
	usuario.addEventListener("input", validarNombre)
    mail.addEventListener("input", validarMail)
    apellido.addEventListener("input", validarApellido)
	validarNombre()
    validarMail()
    validarApellido()
}

function validarNombre(){
	if(usuario.value == ''){
		usuario.setCustomValidity('Ingresa tu nombre')
		usuario.style.backgroundColor = 'white'
	}else{
		usuario.setCustomValidity('')
		usuario.style.backgroundColor = 'green'
	}
}

function validarApellido(){
	if(apellido.value == ''){
		apellido.setCustomValidity('Ingresa tu apellido')
		apellido.style.backgroundColor = 'white'
	}else{
		apellido.setCustomValidity('')
		apellido.style.backgroundColor = 'green'
	}
}

function validarMail(){
	if(mail.value == ''){
		mail.setCustomValidity('Ingresa tu mail')
		mail.style.backgroundColor = 'white'
	}else{
		mail.setCustomValidity('')
		mail.style.backgroundColor = 'green'
	}
}

window.addEventListener("load", validarDatos)