const elementos = [
    {tag: 'p', texto: 'Olha se você não me ama'},
    {tag: 'div', texto: 'Então não me ligue'},
    {tag: 'footer', texto: 'Não fique me fazendo queixa'},
    {tag: 'section', texto: '- Manuel Gomes'},
]


const container = document.querySelector(".container");
const div = document.createElement('div');

for (let i= 0; i< elementos.length; i++) {
    let { tag, texto } = elementos [i];
    let tagCriada = document.createElement(tag);
    let textoNode = document.createTextNode(texto);

    tagCriada.appendChild(textoNode); 
    div.appendChild(tagCriada);

}

container.appendChild(div);