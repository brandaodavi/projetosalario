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

btnCalcular.addEventListener('click', ()=>{
    event.preventDefault();

    var inss = 0.05 * campoSalario.value;
    var ir;
    
    if(campoSalario.value > 3500){
        ir = campoSalario.value * 0.18;
        irPercent.innerHTML = `<span>18%</span>`;
    }else{
        ir = campoSalario.value * 0.08;
        irPercent.innerHTML = `<span>8%</span>`;
    }

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