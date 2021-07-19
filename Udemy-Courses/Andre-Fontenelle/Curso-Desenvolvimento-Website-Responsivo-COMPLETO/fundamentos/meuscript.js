// document é o documento/página HTML que estamos trabalhando.
// querySelector é a função que busca/pega o que quisermos dentro da nossa pasta 
var meuBotao = document.querySelector("#botao");
function mostrarAviso(){
    alert("Olá! Você me clicou!");
    }    
meuBotao.addEventListener('click', mostrarAviso);