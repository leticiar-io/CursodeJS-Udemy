alert('Welcome!');

window.confirm('Deseja realmente apagar?'); // retorna true or false

const nome = window.prompt("Digite seu nome: "); //input, posso adicionar dentro de uma const para pegar o valor
console.log(nome)

let num1 = window.prompt("Digite um número: ");
num1 = parseFloat(num1) //transforma para numero
let num2 = window.prompt("Digite outro número: ");
num2 = parseFloat(num2) //transforma para numero
console.log("A soma dos números é: ", num1 + num2);