/* ------------------------------------------
Operadores aritméticos - + / - * 
% = resto da divisão
** = potenciação
+ = adição e concatenação

ORDEM: 
()
** 
*  / % 
+ - 
-------------------------------------------*/

const num1 = 5;
const num2 = 10;
const num3 = 2;
console.log(num1 + (num2 ** num3));


let contador = 1; 

console.log(contador++); // ia retornar 1 (se colocasse depois), mas se colocasse na frente já retornaria 2
console.log(contador); 

contador++; // Incrementa +1 = 2 
++contador; // 3 , tanto faz colocar antes ou depois, só muda a ordem que ele executa, mas dá certo do mesmo jeito

console.log(contador);

let subtrador = 10;
subtrador--;

console.log(subtrador--);

contador += 2; // contador = numero + 2 


// NaN = Not a Number (alguma conta deu errado)