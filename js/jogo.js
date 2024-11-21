let personagem = document.getElementById("personagem");
let imagemPersonagem = document.querySelector(".personagem");


let btnPlay = document.getElementById("play");
let btnDireita = document.getElementById("direita");
let btnEsquerda = document.getElementById("esquerda");
let btnCima = document.getElementById("cima");
let btnBaixo = document.getElementById("baixo");
let posicaox = 0;
let posicaoy = 0;

btnPlay.addEventListener("click",AnimacaoAndar);
btnDireita.addEventListener("click", moverdireita);
btnEsquerda.addEventListener("click", moveresquerda);
btnCima.addEventListener("click", movercima);
btnBaixo.addEventListener("click", moverbaixo);

function AnimacaoAndar(){
    let id= null;
    clearInterval(id);
    let num = 1;
  personagem.style.left = `${posicaox}px`;
  id = setInterval(frame,50) 
  function frame(){
     if(num>10){
        num = 1
     }
    imagemPersonagem.src = `../img/png/Walk (${num}).png`;
    num++; 
  } 

  btnPlay.style.display = "none";
  
}

function moverdireita(){
    posicaox += 50
    personagem.style.left = `${posicaox}px`;
  }

function moveresquerda(){
  posicaox -= 50
  personagem.style.left = `${posicaox}px`;
}

function movercima(){
    if(posicaoy>=50){
        posicaoy -= 50
        personagem.style.top = `${posicaoy}px`;
    }
    
}

function moverbaixo(){
    if(posicaoy<150){
        posicaoy += 50
        personagem.style.top = `${posicaoy}px`;
    }
    
}

