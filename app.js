function hoverIn(x) {
    x.style.opacity = "1";
    }

function hoverOut(x) {
    x.style.opacity = "0.5";
}

function hoverBig(x){
    x.style.fontSize = "30px";
}

function hoverSmall(x){
    x.style.fontSize = "25px";
}

var nombre = prompt("Cual es tu nombre?","");

var logo = document.querySelector("#logo");

if(nombre===""){
    alert("Invalid Name");
} else{
    logo.innerHTML += "<h2>Bienvenido "+ nombre + "!!!</h2>";
}
