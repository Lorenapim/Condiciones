var selectPin1 = document.querySelector("#pin1");
var selectPin2 = document.querySelector("#pin2");
var selectPin3 = document.querySelector("#pin3");

var parrafoResultado = document.querySelector(".resultado");

function validarPassword () {
    var pin1 = selectPin1.value;
    var pin2 = selectPin2.value;
    var pin3 = selectPin3.value;

    var password = pin1 + pin2 + pin3;

    if(password == "911"){
        parrafoResultado.innerHTML = "pasword 1 correcto"; 
    } else if (password == "714") {
        parrafoResultado.innerHTML = "pasword 2 correcto";
    } else {
        parrafoResultado.innerHTML = "pasword incorrecto";
    }
}
    
