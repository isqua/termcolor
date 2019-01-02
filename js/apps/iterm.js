import AbstractApp from './abstractApp.js';
import { SCHEME, COLORS } from '../utils/scheme.js';
import { getColorData } from '../utils/rgb.js';
import Biject from '../utils/biject.js';
import Plist from '../utils/plist.js';

export default class iTerm extends AbstractApp {
    constructor() {
        super(KEYS_MAP);
        this.colorKeys = new Biject(COLORS_MAP);
    }

    static get title() {
        return 'iTerm (macOS)';
    }

    static get extension() {
        return 'itermcolors';
    }

    /**
     * @override
     * @param {string} text
     * @returns {CS.ColorScheme}
     */
    parse(text) {
        const parser = new DOMParser();
        const iTermDOM = parser.parseFromString(text, 'text/xml');
        const dict = iTermDOM.querySelector('dict');
        /** @type {CS.ColorScheme} */
        const scheme = new Map();

        if (dict) {
            for (let [ key, val ] of Plist.parseDict(dict)) {
                /** @type {string} */
                let schemeKey = this._convertKey(key);

                if (schemeKey) {
                    scheme.set(schemeKey, this._convertValues(val));
                }
            }
        }

        return scheme;
    }

     /**
     * @override
     * @param {CS.ColorScheme} scheme
     * @returns {string}
     */
    stringify(scheme) {
        const plist = new Plist();

        const dict = plist.document.querySelector('plist > dict');

        for (let [ colorName, colorMap ] of scheme) {
            dict.appendChild(plist.createElement('key', this.keys.ktov(colorName)));

            const value = plist.createElement('dict');

            for (let channel of colorMap) {
                value.appendChild(plist.createElement('key', this.colorKeys.ktov(channel[0])));
                value.appendChild(plist.createElement('real', String(channel[1] / 255)));
            }

            dict.appendChild(value);
        }

        return plist.toString();
    }

    /**
     * @param {string} key
     * @returns {string}
     */
    _convertKey(key) {
        return this.keys.vtok(key);
    }

    /**
     * @param {Map<string,string>} map
     * @returns {CS.ColorData}
     */
    _convertValues(map) {
        /** @type Object<String,Number> */
        let color = {};

        for (let [ name, val ] of map.entries()) {
            color[this.colorKeys.vtok(name)] = parseFloat(val) * 255;
        }

        return getColorData(color);
    }
}

const KEYS_MAP = {
    [ SCHEME.ANSI0 ]:  'Ansi 0 Color',
    [ SCHEME.ANSI1 ]:  'Ansi 1 Color',
    [ SCHEME.ANSI2 ]:  'Ansi 2 Color',
    [ SCHEME.ANSI3 ]:  'Ansi 3 Color',
    [ SCHEME.ANSI4 ]:  'Ansi 4 Color',
    [ SCHEME.ANSI5 ]:  'Ansi 5 Color',
    [ SCHEME.ANSI6 ]:  'Ansi 6 Color',
    [ SCHEME.ANSI7 ]:  'Ansi 7 Color',
    [ SCHEME.ANSI8 ]:  'Ansi 8 Color',
    [ SCHEME.ANSI9 ]:  'Ansi 9 Color',
    [ SCHEME.ANSI10 ]: 'Ansi 10 Color',
    [ SCHEME.ANSI11 ]: 'Ansi 11 Color',
    [ SCHEME.ANSI12 ]: 'Ansi 12 Color',
    [ SCHEME.ANSI13 ]: 'Ansi 13 Color',
    [ SCHEME.ANSI14 ]: 'Ansi 14 Color',
    [ SCHEME.ANSI15 ]: 'Ansi 15 Color',

    [ SCHEME.BACKGROUND ]: 'Background Color',
    [ SCHEME.FOREGROUND ]: 'Foreground Color',

    [ SCHEME.CURSOR ]: 'Cursor Color',
    [ SCHEME.CURSOR_TEXT ]: 'Cursor Text Color',

    [ SCHEME.SELECTED_TEXT ]: 'Selected Text Color',
    [ SCHEME.SELECTION ]: 'Selection Color',

    [ SCHEME.BOLD ]: 'Bold Color'
};

const COLORS_MAP = {
    [ COLORS.R ]: 'Red Component',
    [ COLORS.G ]: 'Green Component',
    [ COLORS.B ]: 'Blue Component'
};
