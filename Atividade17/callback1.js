const prompt = require('prompt-sync')();

console.log('1');

function saudacao(nome) {
 
  console.log(' OI ' + nome);
}

function entradaNome(callback) 
{
 
  var nome = prompt('Digite seu nome:');
  callback(nome);
}


entradaNome(saudacao);
