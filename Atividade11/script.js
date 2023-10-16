
function funcaoObject(){

    var objAluno = new Object();
    objAluno.ra="003048221102";
    objAluno.nome="Bianca Vitorino de Souza Melaré";
    alert("RA do Aluno: " + objAluno.ra);
    alert("Nome do aluno: " + objAluno.nome);
}


function funcaoChaves(){
    var objAluno2 = {};
    objAluno2.ra="0030482211019";
    objAluno2["nome"]="Luan Henrique Vendt"
    
    alert("RA do Aluno: " + objAluno2.ra);
    alert("Nome do aluno: " + objAluno2.nome);
}



function funcaoLiteral(){

    var objAluno3 = {
        ra:"0030482211026",
        nome:"Lucas Tokunaga da Silva"
    };
    alert("RA do aluno: " + objAluno3.ra)
    alert("Nome do aluno: " + objAluno3.nome);
}


function construtor(){

    var ra, nome;

    function Aluno(ra, nome){
        this.ra = ra;
        this.nome = nome;
    }
    
    var objAluno4 = new Aluno("0030482211010", "Jeniffer Aparecida da Silva Faria");
    alert("RA do aluno: " + objAluno4.ra)
    alert("Nome do aluno: " + objAluno4.nome);

}

function propriedade(){
    var objAluno5 = {};
    var nome_propriedade = "ra";
    objAluno5[nome_propriedade] = "123"
    objAluno5['nome'] = "Pedro Ramal";
    alert("RA do aluno: " + objAluno5.ra)
    alert("Nome do aluno: " + objAluno5.nome);
}



