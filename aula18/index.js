function cadastroCliente(nome, sobrenome, idade) {
    return { nome, sobrenome, idade }
}
//argumento é o valor que é passado para o parametro

const cliente1 = cadastroCliente("Clotilde", "Silva", 78);
const cliente2 = cadastroCliente("José", "Matias", 87);
const cliente3 = cadastroCliente("Amanda", "Rosimere", 40);

console.log( cliente1, cliente2, cliente3);

const clienteFala = {
    nome: "Lucinda",
    sobrenome: "Silva",
    idade: 56,

    fala() {
        console.log(`${this.nome} ${this.sobrenome} está pedindo 2 ovos`)
    }
}

clienteFala.fala()