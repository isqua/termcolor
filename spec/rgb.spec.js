import { getColorData, toRGB, toHEX } from '../js/utils/rgb.js';

describe('getColorData', function() {
    it('should create a Map of R G B', function() {
        const inputColor = {
            R: 250,
            G: 238,
            B: 221
        };

        const color = getColorData(inputColor);

        expect(color.size).toEqual(3);
        expect(color.get('R')).toEqual(inputColor.R);
        expect(color.get('G')).toEqual(inputColor.G);
        expect(color.get('B')).toEqual(inputColor.B);
    });

    it('should not set channel value bigger than 255', function() {
        const color = getColorData({
            R: 1000,
            G: 238,
            B: 221
        });

        expect(color.get('R')).toEqual(255);
    });

    it('should not set channel value less than 0', function() {
        const color = getColorData({
            R: -10,
            G: 238,
            B: 221
        });

        expect(color.get('R')).toEqual(0);
    });

    it('should set channel value to 0 if it is not passed', function() {
        const color = getColorData({
            G: 238,
            B: 221
        });

        expect(color.get('R')).toEqual(0);
    });
});

describe('toRGB', function() {
    it('should convert color to RGB', function() {
        const color = getColorData({
            R: 250,
            G: 238,
            B: 221
        });

        const rgb = toRGB(color);

        expect(rgb).toEqual('rgb(250,238,221)');
    });

    it('should round float values', function() {
        const color = getColorData({
            R: 249.7,
            G: 238.1,
            B: 221
        });

        const rgb = toRGB(color);

        expect(rgb).toEqual('rgb(250,238,221)');
    });
});

describe('toHEX', function() {
    it('should convert color to HEX', function() {
        const color = getColorData({
            R: 250,
            G: 238,
            B: 10
        });

        const hex = toHEX(color);

        expect(hex).toEqual('#faee0f');
    });

    it('should round float values', function() {
        const color = getColorData({
            R: 249.7,
            G: 238.1,
            B: 221
        });

        const hex = toHEX(color);

        expect(hex).toEqual('#faeedd');
    });
});
