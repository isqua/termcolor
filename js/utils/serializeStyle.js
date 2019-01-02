/**
 * @param {Array<CS.StyleDeclaration>} styles
 * @returns {string}
 */
const serializeStyle = (styles) => styles
    .map(([ selector, rules ]) => `${selector} { ${serializeRules(rules)} }`)
    .join('\n');

/**
 * @param {CS.StyleRules} rules
 * @returns {string}
 */
const serializeRules = (rules) => Object.entries(rules)
    .map(([ prop, value ]) => `${prop}: ${value};`)
    .join(' ');

export default serializeStyle;
