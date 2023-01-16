const user = {
    nome: "Letícia",
    sobrenome: "Rodrigues",
    idade: 18,
    endereco: {
        rua: "Av. Brasil",
        numero: 1313,
    }
};

// Atribuição via desestruturação
const { nome, idade, ...rest } = user;
console.log(nome, idade); // pego apenas o nome que está dentro de user


const { endereco: { rua, numero}} = user;
// const { endereco: { rua: r = "Geraldinho da Tapioca", numero}} = user; -> Atribuindo valor padrao, caso não venha nada
console.log(rua, numero);