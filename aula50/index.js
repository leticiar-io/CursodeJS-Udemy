function funcao() {
  console.log("Oie");

  console.log(arguments); //caso eu queira ver o que foi passado
}

funcao("Valor"); //n dá erro, mesmo a função não pedindo nenhum parametro, ele só ignora

function funcao2(a, b, c, d, e, f, g) {
  console.log(a, b, c, d, e, f, g);
}

funcao2(1, 2, 4, 5); // alguns vão retornar undefined

function funcao3(a, b = 2, c = 4) {
  console.log(a + b + c);
}
funcao3(2, 10, 20);

const conta = (operador, acumulador, ...numeros) => {
  console.log(operador, acumulador, numeros);
};

conta("+", 1, 20, 34);

const conta2 = (...args) => {
  console.log(args);
};
conta2("+", 1, 20, 30, 40, 50);
