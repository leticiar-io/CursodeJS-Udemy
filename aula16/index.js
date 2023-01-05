const alunos = ['Letícia', 'Marilia', 'Manu', 'João'];

// para adicionar no começo e não no final
alunos.unshift('Gabriel');

console.log(alunos);
console.log(alunos[0]);

alunos.push('Tafne'); // adicionou tafne, no final da lista
alunos.push('Radjha');

console.log(alunos);

console.log(alunos.pop()); // remove o ultimo a ser adicionado
console.log(alunos.shift()); // remove o primeiro

console.log(alunos);

console.log(alunos[50]); //retorna undefined
console.log(alunos.slice(0, -2))

console.log(alunos instanceof Array); // é um Array?