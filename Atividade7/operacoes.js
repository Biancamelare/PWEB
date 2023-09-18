var num1 = prompt("Informe o 1° número:");
var num2 = prompt("Informe o 2° número:");

var soma = parseFloat(num1) + parseFloat(num2);
var sub = parseFloat(num1) - parseFloat(num2);
var mult = parseFloat(num1) * parseFloat(num2);
var div = parseFloat(num1) / parseFloat(num2);
var resto = parseFloat(num1) % parseFloat(num2);

alert(`Soma: ${soma}`);
alert(`Subtração: ${sub}`);
alert(`Multiplicação: ${mult}`);
alert(`Divisão: ${div.toFixed(2)}`);
alert(`Resto: ${resto}`);