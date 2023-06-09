const cardsContents = [
    {
        title: 'Programación móvil',
        text: `Creamos apps de alto rendimiento para iOS y Android, brindando una experiencia fluida y
        funcional a tus usuarios.`
    },
    {
        title: 'Diseño UI / UX',
        text: `Diseñamos interfaces intuitivas y atractivas, optimizando la usabilidad y experiencia del
        usuario en tu sitio web o aplicación.`
    },
    {
        title: 'Posicionamiento web',
        text: `Mejoramos tu visibilidad en buscadores con SEO efectivo, atrayendo tráfico cualificado para
        maximizar tu impacto en línea.`
    }
]

cardsContents.forEach(appendCard);

function appendCard(content) {
    const card = elementWithClass({ tag: 'article', clazz: 'card' });

    const img = document.createElement('img');
    img.setAttribute('src', '');

    const cardBody = elementWithClass({ tag: 'div', clazz: 'body' });

    const cardTitle = elementWithClass({ tag: 'h1', clazz: 'title' });
    cardTitle.appendChild(document.createTextNode(content.title));

    const cardText = elementWithClass({ tag: 'p', clazz: 'text' });
    cardText.appendChild(document.createTextNode(content.text));

    cardBody.append(cardTitle, cardText);

    card.append(img, cardBody);

    document.getElementById('about-us-cards').append(card);

}

function elementWithClass({ tag, clazz }) {
    const element = document.createElement(tag);
    element.classList.add(clazz);
    return element;
}

