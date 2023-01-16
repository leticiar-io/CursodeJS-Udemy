const nome = ["Letícia Rodrigues", "Larissa Rodrigues", "Leanderson", "Paula", "Paulo"];

for (let valor of nome ) {
    console.log(valor); //retorna cada indice (letra) do nome em caso de string
} // For of 

/*nomes.forEach(function(valor, indice, array) {
    console.log(valor, indice, array)
})*/

// For Classico - Geralmente com iteraveis (arrays ou string)
// For in - Retorna o indice ou chave (string, array ou objetos)
// For of - Retorna o valor em si (iteraveis, arrays ou atrings)