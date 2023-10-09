var num = new Array(3);

for(var i = 0; i < 3; i++)
    num[i] = parseInt(prompt("Digite o número "));

function maiorNum() {

    alert("O maior número de 3!")

    var max = 0;

    for(i = 0; i < num.length; i++)
    {
        if(num[i] > max)
            max = num[i];
    }

    return max;
  }

  function ordenarNum() {
    
    alert("3 números em ordem crescente")
    
    num = num.sort(function(a, b){ return a - b; } );
    return num;

  }
  

let maiorNumero = maiorNum();
alert("O maior número é " + maiorNumero);

let numOrdenados = ordenarNum();
alert("Os números em ordem crescente são " + numOrdenados.join(", "));