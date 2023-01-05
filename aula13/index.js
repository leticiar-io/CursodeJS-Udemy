let num1 = 12.72222;
let num2 = 2.5;

//console.log(num1.toString() + num2);
//console.log(typeof num1) //retorna string


console.log(Number.isInteger(num1)); // é inteiro?
console.log(num1.toFixed(2)); // arredonda para duas casas (retorna 12.79)

let num3 = 0.7;
let num4 = 0.1;


num3 = ((num3 * 100) + (num4 * 100));

console.log(num3);
console.log(Number.isInteger(num3));