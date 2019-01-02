import template from '../utils/template.js';
import serializeStyle from '../utils/serializeStyle.js';

import generateStyles from './styles.js';
import getTable from './table.js';

const TERMINAL_HIDDEN = 'terminal-hidden';
const TERMINAL_INNER = '.terminal-inner';
const TERMINAL_TITLE = '.terminal-title';

export default class TerminalPreview {
    /**
     * @param {HTMLElement} domElem
     */
    constructor(domElem) {
        this.domElem = domElem;

        const inner = this.domElem.querySelector(TERMINAL_INNER);

        if (inner) {
            inner.appendChild(template(getTable()));
        }
    }

    /** @param {string} titleText */
    set title(titleText) {
        const title = this.domElem.querySelector(TERMINAL_TITLE);

        if (title) {
            title.textContent = titleText;
        }
    }

    /**
     * @param {Map} scheme
     */
    set scheme(scheme) {
        this.updateStyles(scheme);
    }

    /**
     * @param {Map} scheme
     */
    updateStyles(scheme) {
        const styleNode = document.createElement('style');
        styleNode.textContent = serializeStyle(generateStyles(TERMINAL_INNER, scheme));

        document.body.appendChild(styleNode);
        this.domElem.classList.remove(TERMINAL_HIDDEN);

        if (this.styleNode && this.styleNode.parentElement) {
            this.styleNode.parentElement.removeChild(this.styleNode)
        }

        this.styleNode = styleNode;
    }
}
