/* SOLUÇÃO 1 
let num1 = prompt('Digite algum número: ');

num1 = Number(num1);
window.document.body.innerHTML += `<h1>O seu número é: ${num1}</h1>`;

window.document.body.innerHTML += `Raiz Quadrada: ${num1 ** 0.5} <br/>`
window.document.body.innerHTML += `${num1} é inteiro: ${Number.isInteger(num1)}<br/>`
window.document.body.innerHTML += `É NaN: ${Number.isNaN(num1)} <br/>`
window.document.body.innerHTML += `Arredondando para baixo: ${Math.floor(num1)} <br/>`
window.document.body.innerHTML += `Arredondando para cima: ${Math.ceil(num1)} <br/>`
window.document.body.innerHTML += `Com duas casas decimais: ${num1.toFixed(2)} <br/>`
*/

// SOLUÇÃO 2
const numero = Number(prompt("Digite um número: "));
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');

numeroTitulo.innerHTML = numero;
texto.innerHTML = " "; 
texto.innerHTML += `<p>Raiz Quadrada: ${numero ** 0.5}</p>`;
texto.innerHTML += `<p>${numero} é inteiro: ${Number.isInteger(numero)}</p>`;
texto.innerHTML += `<p>É NaN: ${Number.isNaN(numero)}</p>`;
texto.innerHTML += `<p>Arredondando para baixo: ${Math.floor(numero)}</p>`;
texto.innerHTML += `<p>Arredondando para cima: ${Math.ceil(numero)}</p>`;
texto.innerHTML += `<p>Com duas casas decimais: ${numero.toFixed(2)}</p>`;
