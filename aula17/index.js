function saudacao(nome) {
    console.log(`Oie, eu sou a ${nome}`)
}

saudacao("Letícia");


function soma(x, y) {
    // esse espaço se chama "ESCOPO DA FUNÇÃO"
    const resultado = x + y; // n posso alterar isso fora do escopo
    return resultado;
}

console.log(soma(2,2));

const raiz = (n) => { //arrow function
    return n ** 0.5;
}

console.log(raiz(9))