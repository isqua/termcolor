export default class PropertyList {
    /**
     * @param {Element} dict
     * @returns {Map<string,any>}
     */
    static parseDict(dict) {
        const data = new Map();
        let key = null;

        for (let child of Array.from(dict.children)) {
            if (child.tagName === 'key') {
                key = child.textContent;
            } else if (child.tagName === 'dict') {
                data.set(key, PropertyList.parseDict(child));
                key = null;
            } else {
                data.set(key, child.textContent);
                key = null;
            }
        }

        return data;
    }

    constructor() {
        const t1 = '-//Apple//DTD PLIST 1.0//EN';
        const t2 = 'http://www.apple.com/DTDs/PropertyList-1.0.dtd';

        const dt = document.implementation.createDocumentType('plist', t1, t2);
        this.document = document.implementation.createDocument(null, 'plist', dt);

        const plist = this.document.querySelector('plist');
        plist.setAttribute('version', '1.0')

        this.dict = this.document.createElement('dict');
        plist.appendChild(this.dict);
    }

    /**
     * @param {String} tagName
     * @param {String} [text]
     * @returns {Element}
     */
    createElement(tagName, text) {
        const element = this.document.createElement(tagName);

        if (text) {
            element.appendChild(this.createTextNode(text));
        }

        return element;
    }

    /**
     * @param {String} text
     * @returns {Node}
     */
    createTextNode(text) {
        return this.document.createTextNode(text);
    }

    /**
     * @param {Element} dict
     * @param {Object} data
     * @returns {Element}
     */
    appendData(dict, data) {
        const keyElem = this.document.createElement('key');
        keyElem.appendChild(this.document.createTextNode(data.key));
        dict.appendChild(keyElem);

        const dataElem = this.document.createElement('data');
        dataElem.appendChild(this.document.createTextNode(data.value))
        dict.appendChild(dataElem);

        return dict;
    }

    /**
     * @returns {String}
     */
    toString() {
        const serializer = new XMLSerializer();

        return `<?xml version="1.0" encoding="UTF-8"?>\n${serializer.serializeToString(this.document)}\n`;
    }
}
