import { SCHEME } from '../utils/scheme.js';

/**
 * @typedef {Array} TermColorDefinition
 * @property {string} 0
 * @property {string} 1
 */

/** @type {Array<TermColorDefinition>} */
export const bgs = [
    [ '', SCHEME.BACKGROUND ],
    [ '40m', SCHEME.ANSI0 ],
    [ '41m', SCHEME.ANSI1 ],
    [ '42m', SCHEME.ANSI2 ],
    [ '43m', SCHEME.ANSI3 ],
    [ '44m', SCHEME.ANSI4 ],
    [ '45m', SCHEME.ANSI5 ],
    [ '46m', SCHEME.ANSI6 ],
    [ '47m', SCHEME.ANSI7 ],
];

/** @type {Array<TermColorDefinition>} */
export const fgs = [
    [ '    m', SCHEME.FOREGROUND ], // Foreground
    [ '   1m', SCHEME.BOLD   ], // Bold
    [ '  30m', SCHEME.ANSI0  ], // Black
    [ '1;30m', SCHEME.ANSI8  ],
    [ '  31m', SCHEME.ANSI1  ], // Red
    [ '1;31m', SCHEME.ANSI9  ],
    [ '  32m', SCHEME.ANSI2  ], // Green
    [ '1;32m', SCHEME.ANSI10 ],
    [ '  33m', SCHEME.ANSI3  ], // Yellow
    [ '1;33m', SCHEME.ANSI11 ],
    [ '  34m', SCHEME.ANSI4  ], // Blue
    [ '1;34m', SCHEME.ANSI12 ],
    [ '  35m', SCHEME.ANSI5  ], // Purple
    [ '1;35m', SCHEME.ANSI13 ],
    [ '  36m', SCHEME.ANSI6  ], // Cyan
    [ '1;36m', SCHEME.ANSI14 ],
    [ '  37m', SCHEME.ANSI7  ], // White
    [ '1;37m', SCHEME.ANSI15 ],
];

/**
 * @param {TermColorDefinition} fg
 * @returns {string}
 */
export const getForegroundClassName = (fg) => `fg-${fg[1]}`;

/**
 * @param {TermColorDefinition} bg
 * @returns {string}
 */
export const getBackgroundClassName = (bg) => `bg-${bg[1]}`;
