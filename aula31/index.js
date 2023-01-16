const verdadeira = true;

// Let tem escopo de bloco { ... bloco}
// Var só tem escopo de função

let nome = "Leticia"; //criando
var nome2 = 'Leticia';

if(verdadeira) { //bloco global
    let nome = "Rodrigues"; //criando 
    var nome2  = "Larissa";
    //console.log(nome, nome2)

    if (verdadeira) {
        var nome2  = "Larissa";
        console.log(nome, nome2); // bloco alinhado 
    }
}


function falaOi () {
    if (verdadeira) {
        var nome = "Lara"; // o var aceita ser chamado lá fora
    }

    console.log(`Oi, ${nome}`)
}

falaOi();