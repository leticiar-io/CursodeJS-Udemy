let num1 = 9.54545;
let num2 = Math.floor(num1); // arredonda para baixo 

let num3 = Math.ceil(num1); // arrendonda para cima 
let num4 = Math.round(num1); // arrendoda de acordo com numero, se for maior que 50 para cima, se não para baixo

console.log(num1, num2, num3, num4);
console.log(Math.max(1,2,3,4543435,22,321233123,4,5,0)); // diz qual o maior numero
console.log(Math.random()); // gera um número aleatório
console.log(Math.min(12, 1, 0, -1, 0.6)); // diz qual o menor numero

const aleatorio = Math.round(Math.random() * (10 - 5) + 5); //numero aleatorio entre 10 e 5
console.log(aleatorio);

//Pegar a raiz quadrada: 
console.log(num1 ** 0.5); 

// Em JS pode-se dividir qualquer numero com 0, mas dá infinito e verdadeiro