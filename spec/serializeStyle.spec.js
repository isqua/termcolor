import serializeStyle from '../js/utils/serializeStyle.js';

describe('serializeStyle', function() {
    it('should stringify array with selectors and rules into CSS string', function() {
        const res = serializeStyle([
            [
                '.block', {
                    background: 'red',
                    'margin-top': '10px'
                }
            ]
        ]);

        expect(res).toBe('.block { background: red; margin-top: 10px; }');
    });
});
