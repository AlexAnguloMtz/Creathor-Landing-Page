export function card({ title, text, img: { src, alt } }) {

    const card = `
        <article class='card'>
            <img src=${src}
                alt=${alt}/>
            <div class='body'>
                <h1 class='title'>
                    ${title}
                </h1>
                <p class='text'>
                    ${text}
                </p>
            </div>
        </article>
    `;

    const template = document.createElement('template');
    template.innerHTML = card;

    return template.content.cloneNode(true);
}