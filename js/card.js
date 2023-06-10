import { renderTemplate } from "./document-utils.js";

export const card = ({ title, text, img: { src, alt } }) => {
    return renderTemplate(`
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
    `);
}