// document is the HTML document/page we are working on.
// querySelector is the function that searches/gets what we want inside our folder.
var myButton = document.querySelector("#button");
function showWarning() {
   alert("Hey! You clicked me!");
}
myButton.addEventListener("click", showWarning);
// Identifying <ul> tag elements of the HTML file
var ingredient = document.querySelector("ul").children[2].innerHTML;
// Internal test to identify element inside <ul>
console.log(ingredient);
// Append unordered list in HTML document via JS (for testing only - not recommended).
var lista = document.querySelector("ul");
var new_item = document.createElement("li");
lista.appendChild(new_item);
document.querySelector("ul").children[3].innerHTML = "Healthier Proteins!";