import { renderTemplate } from './document-utils.js';

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

logos.forEach(logoName => {
    const imagePath = `${basePath}/${logoName}.png`;
    appendLogoCard({ src: imagePath, alt: logoName });
});

function appendLogoCard({ src, alt }) {
    document.querySelector('.technologies .cards').appendChild(technologyCard({ src, alt }));
}

function technologyCard({ src, alt }) {
    return renderTemplate(`
        <div class='card'>
            <div class='img-container'>
                <img src=${src} alt=${alt}>
            </div>
        </div>
    `);
}