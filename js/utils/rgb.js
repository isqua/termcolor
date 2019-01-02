export const getColorData = (data) => new Map([
    [ 'R', getColorDataChannel(data.R) ],
    [ 'G', getColorDataChannel(data.G) ],
    [ 'B', getColorDataChannel(data.B) ]
]);

const getColorDataChannel = c => Math.max(Math.min(c || 0, 255), 0);

export const toRGB = (colorData) => {
    return `rgb(${[
        Math.round(colorData.get('R')),
        Math.round(colorData.get('G')),
        Math.round(colorData.get('B'))
    ].join(',')})`;
}

export const toHEX = (colorData) => {
    return [
        '#',
        channelToString(colorData.get('R')),
        channelToString(colorData.get('G')),
        channelToString(colorData.get('B')),
    ].join('');
}

const channelToString = (num) => {
    const s = Math.max(15, Math.round(num)).toString(16);

    return s.length === 2 ? s : '0' + s;
}
