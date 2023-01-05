const nome = prompt('Digite seu nome completo: ');

window.document.body.innerHTML += `Seu nome é: ${nome} <br/>`
window.document.body.innerHTML += `Seu nome tem ${nome.length} letras <br/>`
window.document.body.innerHTML += `A segunda letra do seu nome é: ${nome[1]} <br/>`
window.document.body.innerHTML += `Qual o primeiro índice da letra 'a' no seu nome: ${nome.indexOf('a', 0)} <br/>`
window.document.body.innerHTML += `Qual o último índice da letra 'a' no seu nome? ${nome.lastIndexOf('a', 26)} <br/>`
window.document.body.innerHTML += `As últimas 3 letras do seu nome são: ${nome.slice(-3, nome.length)} <br/>`
window.document.body.innerHTML += `As palavras do seu nome são: ${nome.split(' ')} <br/>`
window.document.body.innerHTML += `Seu nome com letras maiusculas: ${nome.toUpperCase()} <br/>`
window.document.body.innerHTML += `Seu nome com letras minusculas: ${nome.toLowerCase()} <br/>`
