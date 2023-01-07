/*
&& -> false && true -> false "o valor mesmo"
|| -> true || false -> true

Falsy - são expressões que podem assumir false 
false 
0 
'' "" `` (expressões vazias)
null / undefined 
NaN
*/

console.log('Sherlock Holmes da Silva' && true && NaN); // retorna o valor falso, no caso o NaN é Falsy
console.log('Manoel' && 'Gomes'); // todos são true, logo é retornado o ultimo, no caso "Gomes"

console.log( 0 || "Olha se você não me ama" || null || true); // retorna a String

const corUsuario = null;
const corPadrao = corUsuario || 'azul';

console.log(`Caneta ${corPadrao}, ${corPadrao} caneta`);