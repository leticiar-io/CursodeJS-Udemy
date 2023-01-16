// DOM - objetos que permitem que eu manipule os elementos do HTML


const frutas = ['Goiaba', 'Pera', 'Kiwi'];

for (let i in frutas) { //For In - Lê os indices ou chaves do objeto
    console.log(i, frutas[i]);
}

const pessoa = {
    nome: 'Letícia',
    sobrenome: 'Rodrigues', 
    idade: 18
}

for (let chaves in pessoa) {
    console.log(chaves, pessoa[chaves])
}