/** @type {Object<string,string>} */
const SCHEME = {
    ANSI0:  'ANSI0', // Black
    ANSI1:  'ANSI1', // Red
    ANSI2:  'ANSI2', // Green
    ANSI3:  'ANSI3', // Yellow
    ANSI4:  'ANSI4', // Blue
    ANSI5:  'ANSI5', // Purple
    ANSI6:  'ANSI6', // Cyan
    ANSI7:  'ANSI7', // White
    ANSI8:  'ANSI8',
    ANSI9:  'ANSI9',
    ANSI10: 'ANSI10',
    ANSI11: 'ANSI11',
    ANSI12: 'ANSI12',
    ANSI13: 'ANSI13',
    ANSI14: 'ANSI14',
    ANSI15: 'ANSI15',

    BACKGROUND: 'BACKGROUND',
    FOREGROUND: 'FOREGROUND',
    CURSOR: 'CURSOR',
    CURSOR_TEXT: 'CURSOR_TEXT',
    SELECTION: 'SELECTION',
    SELECTED_TEXT: 'SELECTED_TEXT',
    BOLD: 'BOLD'
};

/** @type {Object<string,string>} */
const COLORS = {
    R: 'R',
    G: 'G',
    B: 'B'
};

export { SCHEME, COLORS };
