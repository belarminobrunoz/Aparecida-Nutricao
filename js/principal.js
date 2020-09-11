var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var paciente = document.querySelector("#primeiro-paciente");


var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;
console.log(peso);

var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;
console.log(altura);

var pesoEhValido = true;
var alturaEhValida = true;
var tdImc = paciente.querySelector(".info-imc");

if (peso <= 0 || peso >= 300) {
    console.log("Peso inválido!");
    pesoEhValido = false;
    tdImc.textContent = "Peso inválido!";
}

if (altura <= 0 || altura >= 3.0) {
    console.log("Altura inválida!");
    alturaEhValida = false;
    tdImc.textContent = "Altura inválida!";
}

if (alturaEhValida && pesoEhValido) {
    var imc = peso / (altura * altura);
    console.log(imc);
    tdImc.textContent = imc;
}