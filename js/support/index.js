import { has } from '../utils/lodash.js';
import template from '../utils/template.js';

export default class Support {
     /**
     * @param {HTMLElement} domElem
     */
    constructor(domElem) {
        this.domElem = domElem;
    }

    /**
     * @param {Array<Object>} apps
     */
    update(apps) {
        const rows = apps.map(app => ({
            tag: 'tr',
            content: [
                {
                    tag: 'td',
                    content: app.title
                },
                {
                    tag: 'td',
                    content: has(app.prototype, 'parse') ? '+' : ''
                },

                {
                    tag: 'td',
                    content: has(app.prototype, 'stringify') ? '+' : ''
                }
            ]
        }));

        this.domElem.appendChild(template({
            tag: 'tbody',
            content: rows
        }));

        this.domElem.classList.add('visible');
    }
}
