/*try { // tente isso
    console.log(naoExisto)
} catch (error) { // caso dê erro, mostre isso
    console.log("Pane no sistema, alguém me desconfigurou")
}
*/

function soma(x, y) {
  if (typeof x !== "number" || typeof y !== "number") {
    throw ("x e y precisam ser numeros");
  }
  return x + y;
}

try {
  console.log(soma(3, '5'));
} catch (error) {
  console.log("error");
}
