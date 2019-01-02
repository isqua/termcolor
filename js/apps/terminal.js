import AbstractApp from './abstractApp.js';
import { SCHEME } from '../utils/scheme.js';
import Plist from '../utils/plist.js';
import { getColorData } from '../utils/rgb.js';

export default class Terminal extends AbstractApp {
    constructor() {
        super(KEYS_MAP);
    }

    static get title() {
        return 'Terminal (macOS)';
    }

    static get extension() {
        return 'terminal'
    }

    /**
     * @override
     * @param {string} text
     * @returns {CS.ColorScheme}
     */
    parse(text) {
        const parser = new DOMParser();
        const FileDOM = parser.parseFromString(text, "text/xml");
        const dict = FileDOM.querySelector('dict');
        const scheme = new Map();

        if (dict) {
            for (let [ key, val ] of Plist.parseDict(dict)) {
                let schemeKey = this._convertKey(key);
                if (schemeKey) {
                    scheme.set(schemeKey, this._convertValues(val));
                }
            }
        }

        return scheme;
    }

    /**
     * @param {string} key
     * @returns {string} value
     */
    _convertKey(key) {
        return this.keys.vtok(key);
    }

    /**
     * @param {string} val
     * @returns {CS.ColorData}
     */
    _convertValues(val) {
        let colors = /\$classO[^\d]*([0-9.]+)\s([0-9.]+)\s([0-9.]+)/.exec(atob(val.replace(/\s+|\n/g, '')))

        if (colors) {
            return getColorData({
                R: parseFloat(colors[1]) * 255,
                G: parseFloat(colors[2]) * 255,
                B: parseFloat(colors[3]) * 255
            });
        }
    }
}

const KEYS_MAP = {
    [ SCHEME.ANSI0 ]:  'ANSIBlackColor',
    [ SCHEME.ANSI8 ]:  'ANSIBrightBlackColor',

    [ SCHEME.ANSI1 ]:  'ANSIRedColor',
    [ SCHEME.ANSI9 ]:  'ANSIBrightRedColor',

    [ SCHEME.ANSI2 ]:  'ANSIGreenColor',
    [ SCHEME.ANSI10 ]: 'ANSIBrightGreenColor',

    [ SCHEME.ANSI3 ]:  'ANSIYellowColor',
    [ SCHEME.ANSI11 ]: 'ANSIBrightYellowColor',

    [ SCHEME.ANSI4 ]:  'ANSIBlueColor',
    [ SCHEME.ANSI12 ]: 'ANSIBrightBlueColor',

    [ SCHEME.ANSI5 ]:  'ANSIMagentaColor',
    [ SCHEME.ANSI13 ]: 'ANSIBrightMagentaColor',

    [ SCHEME.ANSI6 ]:  'ANSICyanColor',
    [ SCHEME.ANSI14 ]: 'ANSIBrightCyanColor',

    [ SCHEME.ANSI7 ]:  'ANSIWhiteColor',
    [ SCHEME.ANSI15 ]: 'ANSIBrightWhiteColor',

    [ SCHEME.BACKGROUND ]: 'BackgroundColor',
    [ SCHEME.FOREGROUND ]: 'TextColor',

    [ SCHEME.CURSOR ]: 'CursorColor',
    // @TODO Does it exists?
    // [ SCHEME.CURSOR_TEXT ]: 'Cursor Text Color',

    // @TODO Does it exists?
    // [ SCHEME.SELECTED_TEXT ]: 'Selected Text Color',
    [ SCHEME.SELECTION ]: 'SelectionColor',

    [ SCHEME.BOLD ]: 'TextBoldColor'
};
