let num1 = prompt("Digite um número: ");
num1 = parseFloat(num1); // ou Number(num1)
let num2 = prompt("Digite outro número: ");
num2 = parseFloat(num2); // ou Number(num2)

const resultado = num1 + num2;
console.log("A soma dos dois números é ", resultado);
alert(`A soma dos dois números é ${resultado}`);