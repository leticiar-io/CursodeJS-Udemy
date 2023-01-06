/* 
Primitivo (imutavel) - string, number, boolean, undefined
null (bigint, symbol) - valores copiados
 
Mutavel(valor por referencia) - array, object, function
*/

let a = [1, 2, 3];
let b = [...a]; // ele pega o valor de a
let c = b;

console.log(a,b);

a.push(4);
console.log(a,b);

b.pop();
console.log(a,b);

a.push("Letícia")
console.log(c);
