
        function jogar(){
            var usuario = document.getElementById('usuario').value;
            console.log(usuario);
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
               alert(`O resultado do jogo foi empate! Usuário escolheu: ${usuario}  Computador escolheu: ${computador}`);
                
            else if(result == 1)
                alert(`O resultado do jogo foi vitória do usuário! Usuário escolheu: ${usuario}  Computador escolheu: ${computador}`);
    
            else if(result == 2)
            alert(`O resultado do jogo foi vitória do computador! Usuário escolheu: ${usuario}  Computador escolheu: ${computador}`);
            
            else if(result == 3)
                alert("Opção inválida.");
        }
       
        
    