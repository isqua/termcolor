const serializeStyle = (styles) => styles
    .map(([ selector, rules ]) => `${selector} { ${serializeRules(rules)} }`)
    .join('\n');

const serializeRules = (rules) => Object.entries(rules)
    .map(([ prop, value ]) => `${prop}: ${value};`)
    .join(' ');

export default serializeStyle;
