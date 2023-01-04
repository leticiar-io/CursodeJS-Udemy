let textinho = "oi eu sou um texto";

console.log(textinho[11]) //retorna a letrinha da 11° posição, no caso u
console.log(textinho.charAt(2)) // retorna a letra e


console.log(textinho.lastIndexOf('e', 3)) // vai do três para baixo
console.log(textinho.match(/[a-z]/g)); // procura todas as letras minusculas
console.log(textinho.length) // diz o tamanho
console.log(textinho.slice(2,5)) // recorta uma parte do texto, no caso nessa parte ele recorta o eu 
