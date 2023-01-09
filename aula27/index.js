// ? : - Operação Ternária 

const pontuacao = 1999;
const nivelUsuario = pontuacao >= 1000 ? "Usuário Vip" : "Usuário Normal";

const corUser = 'Pink'; 
const corPadrao = corUser || 'Black';
/*a const nivel usuario faria praticamente isso aqui: 
if (pontuacao >= 1000){
    console.log("Usuário VIP! Bem-vindo(a/e), ao show da Valeria Almeida!");
    console.log("Vamos hablaaar")
} else {
    console.log("Ops, usuário normal! Parece que você foi barrado amigo")
}*/

console.log(nivelUsuario, corUser);