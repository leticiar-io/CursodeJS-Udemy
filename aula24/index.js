/*
Entre 0 - 11 -> Bom dia 
Entre 12 - 17 -> Boa tarde 
Entre 18 - 23 -> Boa noite
*/

// If pode ser usado sozinho 
// else if precisa de um if inicial, igualmente no else
// posso ter varios else ifs, mas não posso ter vários else

const hora = 21;

if (hora >= 0 && hora <= 11) {
    console.log("Bom dia")
} else if (hora >= 12 && hora <= 17) {
    console.log("Boa tarde")
} else if (hora >= 18 && hora <= 23) {
    console.log("Boa noite")
} else {
    console.log("Olá, acho que a hora tá errada hein")
}