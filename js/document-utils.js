function createElement({ tag, classes }) {
    if (!tag) {
        throw new Error('Tag property is required');
    }

    const element = document.createElement(tag);

    if (classes && classes.length) {
        classes.forEach(className => {
            element.classList.add(className);
        });
    }

    return element;
}

