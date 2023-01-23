try {
  console.log("Abri um arquivo");
  console.log("Manipulei e fechei o arquivo");
  console.log("Fechei o arquivo");

  try {
    console.log(Ob);
  } catch (e) {
    console.log("Sou erro dentro do try que está dentro do try");
  }
} catch (e) {
  console.log("Tratando erro :D");
} finally {
  console.log("FINNALY: Eu sempre sou executado :P");
}



function retornaHora(data) {
    if (data && !(data instanceof Date)) {
        throw new TypeError ('Esperando instância de Date');
    }

    if (!data) {
        data = new Date();
    }

    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
    });
}

try {
    const hora = retornaHora(new Date('01-01-1970 12:58:12'));
console.log(hora);
} catch (e){
    console.log('ops')
} finally {
    console.log('bom dia')
}