import iTerm from '../../../js/apps/iterm.js';
import expectedScheme1 from './scheme1.out.js';
import inputScheme2 from './scheme2.in.js';

describe('iTerm', function() {
    it('should parse scheme', function(done) {
        const term = new iTerm();

        fetch('base/spec/apps/iterm/scheme1.in.itermcolors')
            .then(res => res.text())
            .then(input => {
                const result = term.parse(input);

                expect(result).toEqual(expectedScheme1);
                done();
            });
    });

    it('should stringify scheme', function(done) {
        const term = new iTerm();

        fetch('base/spec/apps/iterm/scheme2.out.itermcolors')
            .then(res => res.text())
            .then(expected => {
                const result = term.stringify(inputScheme2);

                expect(result).toEqual(expected);
                done();
            });
    });
});
