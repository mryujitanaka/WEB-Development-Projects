// document é o documento/página HTML que estamos trabalhando.
// querySelector é a função que busca/pega o que quisermos dentro da nossa pasta.
var meuBotao = document.querySelector("#botao");
function mostrarAviso(){
    alert("Hey! You clicked me!");
    }    
meuBotao.addEventListener('click', mostrarAviso);
// Indentificando elementos da tag <ul> do arquivo HTML
var ingrediente = document.querySelector("ul").children[2].innerHTML;
// Teste interno para identificar o elemento dentro de <ul> 
console.log(ingrediente);
// Acrescentar lista não ordenada no documento HTML através do JS (apenas para testes - não recomendado fazer isso).
var lista = document.querySelector("ul");
var novo_item = document.createElement("li");
lista.appendChild(novo_item);
document.querySelector("ul").children[3].innerHTML = "Healthier Proteins!";