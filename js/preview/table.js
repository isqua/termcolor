import { bgs, fgs, getBackgroundClassName, getForegroundClassName } from './consts.js';

/** @returns {CS.TemplateData} */
const getTable = () => {
    /** @type {CS.TemplateTag} */
    let table = {
        tag: 'table',
        classNames: [ 'terminal-table' ],
        content: []
    };

    let tr = getTr(getTh());

    for (let b of bgs) {
        tr.content.push(getTh(b[0]));
    }

    table.content.push(tr);

    for (let f of fgs) {
        let tr = getTr(getTh(f[0]));

        for (let b of bgs) {
            tr.content.push({
                tag: 'td',
                content: [
                    {
                        tag: 'span',
                        classNames: [ getForegroundClassName(f), getBackgroundClassName(b) ],
                        content: [ 'gYw' ]
                    }
                ]
            });
        }

        table.content.push(tr);
    }

    return table;
}

/**
 * @param {CS.TemplateData|null} [content]
 * @returns {CS.TemplateTag}
 */
const getTh = (content) => ({
    tag: 'th',
    content: [ { tag: 'span', content: [ content ] } ]
});

/**
 * @param {CS.TemplateData} content
 * @returns {CS.TemplateTag}
 */
const getTr = (content) => ({
    tag: 'tr',
    content: [ content ]
});

export default getTable;
