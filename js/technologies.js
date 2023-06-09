const basePath = '../assets/technologies-logos';

const logos = [
    `php`,
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
    const alt = logo.split('.')[0];
    appendLogoCard(fullPath, alt);
});

function appendLogoCard(image, alt) {
    const img = document.createElement('img');
    img.setAttribute('src', image);
    img.setAttribute('alt', alt);

    const card = document.createElement('div');
    card.classList.add('card');

    const imgContainer = document.createElement('div');
    imgContainer.classList.add('img-container');

    imgContainer.appendChild(img);
    card.appendChild(imgContainer);

    document.getElementById('technologies-cards').appendChild(card);
}