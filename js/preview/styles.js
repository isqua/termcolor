import { SCHEME } from '../utils/scheme.js';
import { toRGB } from '../utils/rgb.js';
import { bgs, fgs, getBackgroundClassName, getForegroundClassName } from './consts.js';

/**
 * @param {string} rootNode
 * @param {Map} scheme
 * @returns {Array<Array}
 */
const generateStyles = (rootNode, scheme) => {
    /**
     * @type {Array<Array>} styles
     */
    let styleText = [];

    /**
     * @param {string} selector
     * @param {string} name
     */
    const safeSetFgColor = (selector, name) => {
        if (scheme.has(name)) {
            styleText.push([ selector, { 'color': toRGB(scheme.get(name)) } ]);
        }
    }

    /**
     * @param {string} selector
     * @param {string} name
     */
    const safeSetBgColor = (selector, name) => {
        if (scheme.has(name)) {
            styleText.push([ selector, { 'background-color': toRGB(scheme.get(name)) } ]);
        }
    }

    safeSetBgColor(rootNode, SCHEME.BACKGROUND);
    safeSetFgColor(rootNode, SCHEME.FOREGROUND);

    // @TODO Раскрашивать селекшн только внутри терминала
    safeSetBgColor('::selection', SCHEME.SELECTION);
    safeSetFgColor('::selection', SCHEME.SELECTED_TEXT);

    for (let b of bgs) {
        safeSetBgColor(`.${getBackgroundClassName(b)}`, b[1]);
    }

    for (let f of fgs) {
        safeSetFgColor(`.${getForegroundClassName(f)}`, f[1]);
    }

    return styleText;
}

export default generateStyles;
