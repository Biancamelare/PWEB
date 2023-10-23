var janela = document.getElementById("janela");
var titulo = document.getElementById("titulo");

janela.addEventListener("click", quebrarJanela)
janela.addEventListener("mouseout", fecharJanela)
janela.addEventListener("mouseover", abrirJanela)

function abrirJanela() {
    janela.src = "src/JanelaAberta.jpg";
    titulo.innerHTML = "Janela Aberta";
  }

  function fecharJanela() {
    janela.src = "src/JanelaFechada.webp";
    titulo.innerHTML = "Janela Fechada";
  }

  function quebrarJanela() {
    janela.src = "src/JanelaQuebrada.webp";
    titulo.innerHTML = "Janela Quebrada";
  }

  function carrega(){
    janela.src = "./src/JanelaFechada.webp"
    titulo.innerHTML = "Abra a Janela"
}



