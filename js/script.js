const modalContainer = document.querySelector('.modal-container');
const temaAtt = [
    body = document.querySelector('.body'),
    temaGeral = document.querySelector('.container'),
    temaView = document.querySelector('.view-container'),
    temaSemiCircle = document.querySelector('.semicircle'),
    temaInfoContainer = document.querySelector('.info-container'),
    temaSalarioBox = document.querySelector('.salario-box'),
    temaDescontosBox = document.querySelector('.descontos-box'),
    temaInss = document.querySelector('.inss'),
    temaIr = document.querySelector('.ir')
];

setInterval(() =>{
    const agora = new Date();
    let hora = agora.getHours();
    mudarTema(temaAtt, hora);
}, 1000);
  
function abrirModal(){
    modalContainer.classList.add('active');
}

function fecharModal(){
    modalContainer.classList.remove('active');
}

function mudarTema(temas, hora){
    if(hora >= 5 && hora < 18){
        for(let i = 0; i < temas.length; i++){
            temas[i].classList.add('dia');
        }
    }else{
        for(let i = 0; i < temas.length; i++){
            temas[i].classList.remove('dia');
        }
    }
}