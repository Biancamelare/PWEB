var num = prompt("Digite o número de jogos a serem jogados: ");

    for(var i = 1; i <= num; i ++)
    {
        var usuario = prompt("Pedra, papel ou tesoura?");
        var resul = 0;

        var computador = Math.random() * 3;

        if(computador < 1)
            computador = "pedra";

        else if(computador < 2)
            computador = "papel";

        else
            computador = "tesoura";

        computador = computador.toUpperCase();
        usuario = usuario.toUpperCase();

        if(computador == usuario)
            result = 0;

        else if(usuario == "PEDRA")
        {
            if(computador == "PAPEL")
                result = 2;
            else 
                result = 1;
                
        }

        else if(usuario == "PAPEL")
        {
            if(computador == "TESOURA")
                result = 2;
            else
                result = 1;
        }

        else if(usuario == "TESOURA")
        {
            if(computador == "PEDRA")
                result = 2;
            else
                result = 1;
        }

        else
            result = 3;

        if(result == 0)
           alert(`O resultado do jogo ${i} foi empate! Usuário escolheu: ${usuario}  Computador escolheu: ${computador}`);
            
        else if(result == 1)
            alert(`O resultado do jogo ${i} foi vitória do usuário! Usuário escolheu: ${usuario}  Computador escolheu: ${computador}`);

        else if(result == 2)
        alert(`O resultado do jogo ${i} foi vitória do computador! Usuário escolheu: ${usuario}  Computador escolheu: ${computador}`);
        
        else if(result == 3)
            alert("Opção inválida.");
        
    }