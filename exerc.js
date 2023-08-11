const form = document.getElementById('formulario');
let valido = false;
const A = document.getElementById('campo-a');
const B = document.getElementById('campo-b');
const Erro = document.querySelector('.erro');

function Campovalido(Campox, CampoY){
    const CampoA = parseFloat(CampoY.value);
    const CampoB = parseFloat(Campox.value);
    return CampoB > CampoA;
}
A.addEventListener('input', MensagemErro);
B.addEventListener('input', MensagemErro);


function MensagemErro(){
    const ValorA = parseFloat(A.value);
    const ValorB = parseFloat(B.value);

    if( ValorA > ValorB){
        Erro.style.display = 'block';
        A.style.border = '1px solid red';
        B.style.border = '1px solid red';
    }
    else{
        Erro.style.display = 'none';
        A.style.border = '';
        B.style.border = '';
    }
}



form.addEventListener('submit', function(a){
    a.preventDefault();
    
    valido = Campovalido(B, A);
    
    if(valido){
        document.querySelector('.sucesso').style.display = 'block';
        A.value = '';
        B.value = '';
    } 
})

