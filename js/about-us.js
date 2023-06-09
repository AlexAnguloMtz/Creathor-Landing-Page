import { createElement } from './document-utils.js';

const imagesBasePath = '../assets/images/';

const cards = [
    {
        title: 'Programación móvil',
        text: `Creamos apps de alto rendimiento para iOS y Android, brindando una experiencia fluida y
        funcional a tus usuarios.`,
        img: { src: `${imagesBasePath}mobile.jpg` }
    },
    {
        title: 'Diseño UI / UX',
        text: `Diseñamos interfaces intuitivas y atractivas, optimizando la usabilidad y experiencia del
        usuario en tu sitio web o aplicación.`,
        img: { src: `${imagesBasePath}ui_design.png` }
    },
    {
        title: 'Posicionamiento web',
        text: `Mejoramos tu visibilidad en buscadores con SEO efectivo, atrayendo tráfico cualificado para
        maximizar tu impacto en línea.`,
        img: { src: `${imagesBasePath}seo_2.jpg` }
    }
]

cards.forEach(appendCard);

function appendCard(card) {

    const cardTitle = createElement({
        tag: 'h1',
        classes: ['title'],
        children: [card.title]
    });

    const cardText = createElement({
        tag: 'p',
        classes: ['text'],
        children: [card.text]
    });

    const cardBody = createElement({
        tag: 'div',
        classes: ['body'],
        children: [cardTitle, cardText]
    });

    const img = createElement({
        tag: 'img',
        attributes: [{ name: 'src', value: card.img.src }]
    });

    const cardElement = createElement({
        tag: 'article',
        classes: ['card'],
        children: [img, cardBody]
    });

    document.querySelector('.about-us .cards').append(cardElement);

}