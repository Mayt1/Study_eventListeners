let btn = document.querySelector('button');

function random(number) {
  return Math.floor(Math.random()*(number+1));
}

function mudarcor() {
    let rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
  document.body.style.backgroundColor = rndCol;
}

//especiais
let button = document.getElementById("keypress")
function ativarbotao () {
    let rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
    document.body.style.backgroundColor = rndCol;
    
}

function mudarbox() {
    let rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
    return rndCol

}


//event listeners


function caixasColoridas(event){
    event.target.style.backgroundColor = mudarbox()
}

function adicionarEvent(){
    const container = document.querySelector('#container');
    container.addEventListener('click', caixasColoridas);

}

function removerEvent() {
    container = document.querySelector('#container');
    container.removeEventListener('click', caixasColoridas)
    console.log("remove")
}
//2 funçoes
let botaoDoisFunçao = document.getElementById("maisdeumafunc");
botaoDoisFunçao.addEventListener("click", alert1);
botaoDoisFunçao.addEventListener("click", alert2);

function alert1() {
  alert ("Funçao 1 minha amiga");
}

function alert2() {
  alert ("Funçao 2 em seguida");
}

//eventbubbling vs capturing

function alertBranco(){
    alert("BRANCOOO");
}

function alertazul(){
    alert("AZULLL");
}
document.getElementById("myP1").addEventListener("click", alertBranco, false);//bubbling
  
document.getElementById("myDiv1").addEventListener("click", alertazul, false);
  
document.getElementById("myP2").addEventListener("click",alertBranco, true);//capture
  
document.getElementById("myDiv2").addEventListener("click", alertazul, true);

function func1(event) {
    alert("botao interno");
    if (document.getElementById("check").checked) {
      event.stopPropagation();
    }
 }
  
function func2() {
    alert("botao externo");
}