var inputGithub = document.querySelector("#cantidadGithub");
var inputSlack = document.querySelector("#cantidadSlack");
var inputGit = document.querySelector("#cantidadGit");

var spancantidadTotal = document.querySelector("#cantidadTotal");

function calcularTotalStickers() {
    var cantidadGithub = Number(inputGithub.value);
    var cantidadSlack = Number(inputSlack.value);
    var cantidadGit = Number(inputGit.value);

    var cantidadTotal = cantidadGit + cantidadSlack + cantidadGithub;

    if (cantidadTotal <= 10) {
        spancantidadTotal.innerHTML = cantidadTotal;
    } else {
        spancantidadTotal.innerHTML = "demasiados";
    }
}