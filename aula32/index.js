let a = 'A'; //B
let b = 'B'; //C
let c = 'C'; //A 

const valores = [b, c, a];
[a, b, c] = valores;

console.log(a,b,c);

const numeros = [1.23, 211, 213, 412];
const [primeiroNumero, segundoNumero, terceiroNumero, ...resto] = numeros;
//const [primeiroNumero, , terceiroNumero, ...resto] = numeros; -> pulando algum numero


// ...rest -> resto das coisas, spread -> distribuir
 
console.log(primeiroNumero);
console.log(resto);

const matrizinha = [[1, 2, 3], [2, 3, 54], [5, 7, 8]];
const [lista1, lista2, lista3] = matrizinha;
console.log(lista3[2]) //imprime 8