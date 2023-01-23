// Function - hoisting (n importa onde vc colocou, se foi antes ou depois da declaração, ele coloca no topo automáticamente)
falaOi(); 

function falaOi() {
    console.log("Oi")
}

// First-class objetcs (Objetos de primeira classe)
// Function expression

const souUmRobo = function() {
    console.log("Sou um robô")
}
souUmRobo();

// Arrow function

const funcaoArrow = () => {
    console.log('sou uma arrow function');
}

funcaoArrow();


// Dentro de um objeto
const obj = {
    falar() {
        console.log('Estou falando...');
    }
}

obj.falar();