/* ---------------------------------------------
Operadores Lógicos

&& - and = E (Todas as expressões precisam ser verdadeiras para retornar true)
|| - or = OU 
! - NOT - NÃO 
--------------------------------------------- */

const expressaoOr = false || false || true; 

console.log(expressaoOr); //retorna true

const usuario = 'Leticia';
const senha = '123456';

const login = usuario === 'Leticia' && senha === '12345';
console.log(login); //retorna false

console.log(!false); //retorna true, inverte o valor
console.log(!!true); // retorna true, já que vira false e do false vira true