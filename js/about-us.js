import { card } from './card.js';

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

function appendCard(cardModel) {
    document.querySelector('.about-us .cards').append(card(cardModel));
}

