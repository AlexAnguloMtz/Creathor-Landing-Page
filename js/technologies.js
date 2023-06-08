const basePath = '../assets/technologies-logos';

const logos = [
    `php.png`,
    'java.png',
    'android.png'
]

logos.forEach(logo => appendTechnologyCard(`${basePath}/${logo}`, 'php'));

function appendTechnologyCard(image, alt) {
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