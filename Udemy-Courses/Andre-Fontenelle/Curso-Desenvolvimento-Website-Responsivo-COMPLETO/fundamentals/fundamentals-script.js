// document é o documento/página HTML que estamos trabalhando.
// querySelector é a função que busca/pega o que quisermos dentro da nossa pasta.
var myButton = document.querySelector("#button");
function showWarning() {
   alert("Hey! You clicked me!");
}
myButton.addEventListener("click", showWarning);
// Indentificando elementos da tag <ul> do arquivo HTML
var ingredient = document.querySelector("ul").children[2].innerHTML;
// Teste interno para identificar o elemento dentro de <ul>
console.log(ingredient);
// Acrescentar lista não ordenada no documento HTML através do JS (apenas para testes - não recomendado fazer isso).
var lista = document.querySelector("ul");
var new_item = document.createElement("li");
lista.appendChild(new_item);
document.querySelector("ul").children[3].innerHTML = "Healthier Proteins!";