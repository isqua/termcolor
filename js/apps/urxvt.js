import AbstractApp from './abstractApp.js';
import { SCHEME } from '../utils/scheme.js';
import { toHEX } from '../utils/rgb.js';

export default class iTerm extends AbstractApp {
    constructor() {
        super(KEYS_MAP);
    }

    static get title() {
        return 'urxvt (linux)';
    }

    static get extension() {
        return 'Xresources';
    }

     /**
     * @override
     * @param {CS.ColorScheme} scheme
     * @returns {string}
     */
    stringify(scheme) {
        /** @type Array<string> */
        const text = [];

        for (let [ colorName, colorMap ] of scheme) {
            const resultColorName = this.keys.ktov(colorName);

            if (resultColorName) {
                text.push(`URxvt*${resultColorName}: ${toHEX(colorMap)}\n`)
            }
        }

        return text.join('');
    }
}

const KEYS_MAP = {
    [ SCHEME.ANSI0 ]:  'color0',
    [ SCHEME.ANSI1 ]:  'color1',
    [ SCHEME.ANSI2 ]:  'color2',
    [ SCHEME.ANSI3 ]:  'color3',
    [ SCHEME.ANSI4 ]:  'color4',
    [ SCHEME.ANSI5 ]:  'color5',
    [ SCHEME.ANSI6 ]:  'color6',
    [ SCHEME.ANSI7 ]:  'color7',
    [ SCHEME.ANSI8 ]:  'color8',
    [ SCHEME.ANSI9 ]:  'color9',
    [ SCHEME.ANSI10 ]: 'color10',
    [ SCHEME.ANSI11 ]: 'color11',
    [ SCHEME.ANSI12 ]: 'color12',
    [ SCHEME.ANSI13 ]: 'color13',
    [ SCHEME.ANSI14 ]: 'color14',
    [ SCHEME.ANSI15 ]: 'color15',

    [ SCHEME.BACKGROUND ]: 'background',
    [ SCHEME.FOREGROUND ]: 'foreground',

    [ SCHEME.CURSOR ]: 'cursorColor',

    [ SCHEME.BOLD ]: 'colorBD'
};
