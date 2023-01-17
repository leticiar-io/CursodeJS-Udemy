let i = 0;

/*while (i <= 10) {
    console.log(i);
    i++; //se eu n passar o incremento, pode ser criado um loop
} */

const frutas = ["Goiaba", "Pera", "Limão", "Tomate", "Maçã"];

/*while (i < frutas.length) {
  console.log(frutas[i]);
  i++; 
}*/

function random(min, max) {
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
}

const min = 1;
const max = 50;
let rand = random(min, max);

/*
while (rand !== 10) {
    rand = random(min,max);
    console.log(rand);
}
*/

do {
    rand = random(min,max);
    console.log(rand);
} while (rand !== 10);