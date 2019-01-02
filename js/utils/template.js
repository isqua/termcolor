/**
 * @param {CS.TemplateData|CS.TemplateData[]} data
 * @returns {HTMLElement|Node}
 */
const template = (data) => {
    if (data === null || data === void 0) {
        return document.createTextNode('');
    }

    if (typeof data !== 'object') {
        return document.createTextNode(data);
    }

    if (Array.isArray(data)) {
        let frag = document.createDocumentFragment();

        data.forEach(elem => {
            frag.appendChild(template(elem));
        });

        return frag;
    }

    let tag = document.createElement(data.tag);

    if (data.classNames) {
        for (let cls of data.classNames) {
            tag.classList.add(cls);
        }
    }

    if (data.content) {
        tag.appendChild(template(data.content));
    }

    return tag;
};

export default template;
