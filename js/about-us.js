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

    const img = createElement({ tag: 'img', attributes: [{ name: 'src', value: '' }] });

    const cardTitle = createElement({ tag: 'h1', classes: ['title'], children: [content.title] });

    const cardText = createElement({ tag: 'p', classes: ['text'], children: [content.text] });

    const cardBody = createElement({ tag: 'div', classes: ['body'], children: [cardTitle, cardText] });

    const card = createElement({ tag: 'article', classes: ['card'], children: [img, cardBody] });

    document.querySelector('.about-us .cards').append(card);

}
