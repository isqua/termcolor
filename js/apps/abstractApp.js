import Biject from '../utils/biject.js';

/**
 * @typedef {Object} ApplicationSchema
 */
export default class AbstractApp {
    /**
     * @param {CS.BijectMap} map
     */
    constructor(map) {
        this.keys = new Biject(map);
    }

    /**
     * @abstract
     * @returns {string}
     */
    static get mimeType() {
        return 'text/plain';
    }

    /**
     * @abstract
     * @returns {string}
     */
    static get extension() {
        return 'txt';
    }

    /**
     * @abstract
     * @returns {string}
     */
    static get title() {
        return 'Unknown Application';
    }

    /**
     * @param {string} filename
     * @returns {boolean}
     */
    static doesSupport(filename) {
        return new RegExp('.' + this.extension + '$', 'i').test(filename);
    }

    /**
     * @param {string} filename
     * @returns {string}
     */
    static getName(filename) {
        return filename.replace(new RegExp('.' + this.extension + '$', 'i'), '');
    }

    /**
     * @param {string} schemeName
     * @returns {string}
     */
    static getFileName(schemeName) {
        return `${schemeName}.${this.extension}`;
    }

    /**
     * @abstract
     * @param {string} text
     * @returns {CS.ColorScheme} schema
     */
    parse(text) {
        return new Map();
    }

    /**
     * @abstract
     * @param {CS.ColorScheme} schema
     * @returns {string}
     */
    stringify(schema) {
        return '';
    }
}
