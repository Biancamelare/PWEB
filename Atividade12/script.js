function calcular(){
    var x = document.getElementById('base').value;
    var y = document.getElementById('altura').value;

    function Retangulo(x, y){
        this.x = x;
        this.y = y;
    
        this.calcArea = function(){
            return x * y;
        }
    }
    
    var objRet = new Retangulo(x, y);
    
    alert("A medida da área do retângulo é de: " + objRet.calcArea());
}



function Conta(){

    this.getNome = function(){
        return this.nome;
    }

    this.setNome = function(nome){
        this.nome = nome;
    }

    this.getBanco = function(){
        return this.banco;
    }

    this.setBanco = function(banco){
        this.banco = banco;
    }

    this.getNumConta = function(){
        return this.numConta;
    }

    this.setNumConta = function(numConta){
        this.numConta = numConta;
    }

    this.getSaldo = function(){
        return this.saldo;
    }

    this.setSaldo = function(saldo){
        this.saldo = saldo;
    }

    
}

function Corrente(){ 

    this.getSaldoEspecial = function(){
        return this.saldoEspecial;
    };

    this.setSaldoEspecial = function(saldoEspecial){
        this.saldoEspecial = saldoEspecial;
    };
}

function Poupanca(){ 
    
    this.getJuros = function(){
        return this.juros;
    };
    
    this.setJuros = function(juros){
        this.juros = juros;
    };

    this.getDataVencimento = function(){
        return this.dataVencimento;
    };
    
    this.setDataVencimento = function(dataVencimento){
        this.dataVencimento = dataVencimento;
    };
}

function dadosCorrente(){
    Corrente.prototype = new Conta();
    objCorrente = new Corrente();

    objCorrente.setNome("Bianca Melaré");
    objCorrente.setBanco("PicPay");
    objCorrente.setNumConta("35");
    objCorrente.setSaldo(1111);
    objCorrente.setSaldoEspecial(11111);

    alert("Dados da conta corrente\nNome: " + objCorrente.getNome() + 
                "\nBanco: " + objCorrente.getBanco() + 
                "\nNúmero da Conta: " + objCorrente.getNumConta() +
                "\nSaldo: " + objCorrente.getSaldo() +
                "\nSaldo Especial: " + objCorrente.getSaldoEspecial());


}


function dadosPoupanca(){
    Poupanca.prototype = new Conta();
    objPoupanca = new Poupanca();
    
    
    objPoupanca.setNome("Denilce Veloso");
    objPoupanca.setBanco("Banco do Brasil");
    objPoupanca.setNumConta("15");
    objPoupanca.setSaldo(5000);
    objPoupanca.setJuros(25);
    objPoupanca.setDataVencimento("30/12/2023");
    
    
    alert("Dados da conta poupança\nNome: " + objPoupanca.getNome() + 
                    "\nBanco: " + objPoupanca.getBanco() + 
                    "\nNúmero da Conta: " + objPoupanca.getNumConta() +
                    "\nSaldo: " + objPoupanca.getSaldo() +
                    "\nJuros: " + objPoupanca.getJuros() +
                    "\nData de vencimento: " + objPoupanca.getDataVencimento());
}
