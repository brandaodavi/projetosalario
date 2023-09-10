const btnCalcular = document.querySelector('#calcular');
const campoNome = document.querySelector('#nome');
const campoSalario = document.querySelector('#salario');
const valorSalario = document.querySelector('#salarioStatus');
const valorInss = document.querySelector('#valor-inss');
const valorIr = document.querySelector('#valor-ir');
const irPercent = document.querySelector('#ir-percent');
const alerta1 = document.querySelector('.alerta1');
const alerta2 = document.querySelector('.alerta2');
const descricao = document.querySelector('.descricao2');

btnCalcular.addEventListener('click', (event)=>{
    event.preventDefault();

    var inss = 0.05 * campoSalario.value;
    var impostoRenda = 0;
    var percentIr = '0%';
    
    if(campoSalario.value > 4664.68){
        impostoRenda = 0.275;
        percentIr = '27,5%';
    }else if(campoSalario.value > 3751.06 && campoSalario.value <= 4664.68){
        impostoRenda = 0.225;
        percentIr = '22,5%'
    }else if(campoSalario.value > 2826.65 && campoSalario.value <= 3751.06){
        impostoRenda = 0.15;
        percentIr = '15%'
    }else if(campoSalario.value > 1903.98 && campoSalario.value <= 2826.65){
        impostoRenda = 0.075;
        percentIr = '7,5%'
    }

    irPercent.innerHTML = `<span>${percentIr}</span>`;

    var ir = impostoRenda * campoSalario.value;
    var desconto = inss + ir;
    var salarioLiquido = campoSalario.value - desconto;

    if(!campoSalario.value){
        alerta2.classList.add('active');
    }else{ 
        alerta2.classList.remove('active');
    }
    
    if(!campoNome.value){
        alerta1.classList.add('active');
    }else{
        alerta1.classList.remove('active');
    }
    
    if(campoSalario.value && campoNome.value){
        descricao.innerHTML = `<span>O valor do salário líquido de ${campoNome.value} é: </span>`
        valorSalario.innerHTML = `<span>R$ ${salarioLiquido.toFixed(2)}</span>`;
        valorInss.innerHTML = `<span>-R$ ${inss.toFixed(2)}</span>`;
        valorIr.innerHTML = `<span>-R$ ${ir.toFixed(2)}</span>`;
    }else{
        modalContainer.classList.remove('active');
    }
    
});