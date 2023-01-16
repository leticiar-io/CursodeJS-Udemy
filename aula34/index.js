// i - index
for (let i = 1; i <= 10; i++) {
  console.log(`Mariana conta ${i}`);
}
console.log("Ana, viva mariana viva Mariana!");

console.log(" ----- É IMPAR OU PAR? ------ ")
for (let i = 0; i <= 10; i++) {
    const par = i % 2 === 0 ? "par" : "ímpar";

    console.log(`${i} é ${par}`);
}

const frutas = ["Maçã", "Uva", "Goiaba"];

for (let i = 0; i< frutas.length; i++) {
    console.log(`Índice ${i}, ${frutas[i]}`)
}