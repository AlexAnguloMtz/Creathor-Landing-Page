function createElement({ tag, classes = [], attributes = [], children = [] }) {
    const element = document.createElement(tag);

    if (classes.length > 0) {
        element.classList.add(...classes);
    }

    if (attributes.length > 0) {
        attributes.forEach(({ name, value }) => {
            element.setAttribute(name, value);
        });
    }

    if (children.length > 0) {
        children.forEach(child => {
            if (typeof child === 'string') {
                element.appendChild(document.createTextNode(child));
            } else if (child instanceof HTMLElement) {
                element.appendChild(child);
            }
        });
    }

    return element;
}