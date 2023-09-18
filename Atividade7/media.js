var nome = prompt("Qual é o seu nome?");
var nota1 = prompt("Digite a 1° nota:");
var nota2 = prompt("Digite a 2° nota:");
var nota3 = prompt("Digite a 3° nota:");

var media = (parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3))/3;

alert(`A média de ${nome} é ${media.toFixed(2)}.`);
