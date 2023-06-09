const basePath = '../assets/technologies-logos';

const logos = [
    'php',
    'java',
    'android',
    'node',
    'linux',
    'javascript',
    'css',
    'html',
    'wordpress',
    'python',
    'google_cloud',
    'google_maps',
    'firebase',
    'amazon_web_services',
    'jquery',
    'swift',
    'google_analytics',
    'windows_server',
    'google_adsense',
    'arduino',
    'mysql'
]

logos.forEach(logo => {
    const fullPath = `${basePath}/${logo}.png`;
    appendLogoCard({ img: { src: fullPath, alt: logo } });
});

function appendLogoCard({ img: { src, alt } }) {
    const img = createElement({
        tag: 'img',
        attributes: [
            { name: 'src', value: src },
            { name: 'alt', value: alt }
        ]
    });

    const imgContainer = createElement({
        tag: 'div',
        classes: ['img-container'],
        children: [img]
    });

    const card = createElement({
        tag: 'div',
        classes: ['card'],
        children: [imgContainer]
    });

    document.querySelector('.technologies .cards').appendChild(card);
}