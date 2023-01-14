var imagen = document.querySelector("img");

function cambiarBorde () {
    if(imagen.style.border == ""){
        imagen.style.border = "2px solid red"
    } else {
        imagen.style.border = "";
    }
}
