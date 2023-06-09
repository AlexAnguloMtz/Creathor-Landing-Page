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
    const card = createElement({ tag: 'article', classes: ['card'] });

    const img = createElement({ tag: 'img' });
    img.setAttribute('src', '');

    const cardBody = createElement({ tag: 'div', classes: ['body'] });

    const cardTitle = createElement({ tag: 'h1', classes: ['title'] });
    cardTitle.appendChild(document.createTextNode(content.title));

    const cardText = createElement({ tag: 'p', classes: ['text'] });
    cardText.appendChild(document.createTextNode(content.text));

    cardBody.append(cardTitle, cardText);

    card.append(img, cardBody);

    document.getElementById('about-us-cards').append(card);

}
