let varA = "A"; // B
let varB = "B"; //C
let varC = "C"; // A

let varD = varA;

varA = varB;
varB = varC;
varC = varD;

console.log(varA, varB, varC);

// outra solução

[varA, varB, varC] = [varB, varC, varA];
console.log(varC, varA, varB);
