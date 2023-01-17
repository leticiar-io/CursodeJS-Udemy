const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let numero of numeros) { //posso usar com os outros for tbm
    if (numero === 2) {
        console.log('Pulei o numero 2 :(')
        continue; //encontrou? pula o 2 e continua
    }

    if (numero === 7) {
        console.log("Vixe, encontrei o 7, vou sair...")
        break; //parou aqui
    }
    console.log(numero);
}