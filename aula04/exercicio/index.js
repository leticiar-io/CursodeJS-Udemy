const nomeCompleto = "Letícia Rodrigues Ferreira";
const idade = 19;
const peso = 67;
const alturaEmM = 1.69;

let IMC = peso / (alturaEmM * alturaEmM);
let anoDeNascimento;
anoDeNascimento = 2023 - idade;

console.log(`${nomeCompleto} tem ${idade} anos pesa ${peso}kg`);
console.log(`tem ${alturaEmM} de altura e seu IMC é de ${IMC}`);

console.log(`${nomeCompleto} nasceu em ${anoDeNascimento}`);
