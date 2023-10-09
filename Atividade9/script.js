const pessoas = 45;

var maisVelha = 0;
var maisNova = 1000;
var media = 0;
var quantPessimo = 0;
var quantOtimo = 0;
var quantBom = 0;
var homens = 0;
var mulheres = 0;

for(var i=0; i<pessoas; i++){

    var idade = parseInt(prompt("Informe a sua idade: "))
    var sexo = prompt("Informe o seu sexo (F ou M): ")
    var nota = prompt("Informe a nota (Péssimo - 1, Regular - 2, Bom - 3, Ótimo - 4): ")

    if (maisVelha < idade)
    maisVelha = idade;


    if (maisNova > idade)
    maisNova = idade;

    if(sexo == "F"){
       mulheres++
    }else if(sexo == "M"){
       homens++
    }

    if(nota >= 3){
        quantBom++
    }else if(nota == 1){
        quantPessimo++
    }

    media += idade
}

media /= pessoas

alert("A média de idade das pessoas é: " + media.toFixed(2));
alert("A idade da pessoa mais velha é: " + maisVelha);
alert("A idade da pessoa mais nova é: " + maisNova);
alert("A quantidade de pessoas que responderam péssimo é: " + quantPessimo );
alert("A porcentagem das pessoas que responderam ótimo é: " + ((quantOtimo * 100)/pessoas).toFixed(2) );
alert("A porcentagem das pessoas que responderam bom é: " + ((quantBom * 100)/pessoas).toFixed(2));
alert("O número de homens que responderam foi: " + homens );
alert("O número de mulheres que responderam foi: " + mulheres );