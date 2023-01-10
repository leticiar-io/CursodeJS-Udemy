const data = new Date(0); // adiciona uma data, se estiver sem nenhum valor retorna o valor de hj
// Date(0) -> 1/1/1970 Timestamp unix ou época unix

//const dataNow = new Date(2023, 1, 20, 16, 48, 45); //ano, mes, dia, hora, minuto, segundo, milessimo de segundo

const dataNow = new Date('2023-01-09 16:52:48');
console.log(dataNow.toString());


/*console.log('Dia', dataNow.getDate());
console.log('Mês', dataNow.getMonth() + 1);
console.log('Ano', dataNow.getFullYear());
console.log('Hora', dataNow.getHours());
console.log('Min', dataNow.getMinutes());
console.log('Seg', dataNow.getSeconds());
console.log('Ms', dataNow.getMilliseconds());
console.log('Dia da semana', dataNow.getDay());*/

function zeroAEsquerda (num) {
    return num >= 10 ? num : `0${num}`
}

function formataData(data){
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth() + 1);
    const ano = zeroAEsquerda(data.getFullYear());

    const hora = zeroAEsquerda(data.getHours());
    const min = zeroAEsquerda(data.getMinutes());
    const seg = zeroAEsquerda(data.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`
}

const dataNova = new Date();
const dataBr = formataData(dataNova);
console.log(dataBr);