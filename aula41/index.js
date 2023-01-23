// Escreva uma função que recebe 2 números e retorna o maior deles
function max(x, y) {
  /*if (x > y) return x;
  return y;*/

  return x > y ? x : y;
}

console.log(max(2, 11));

const max2 = (x, y) => {
  return x > y ? x : y;
};

console.log(max2(20, 11));