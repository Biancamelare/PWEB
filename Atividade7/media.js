var nome = prompt("Qual é o seu nome?");
var nota1 = prompt("Digute a 1° nota?");
var nota2 = prompt("Digute a 2° nota?");
var nota3 = prompt("Digute a 3° nota?");

var media = (parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3))/3;

alert(`A média de ${nome} é ${media.toFixed(2)}.`);