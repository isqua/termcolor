import Terminal from '../../../js/apps/terminal.js';
import expectedScheme1 from './scheme1.out.js';

describe('terminal', function() {
    it('should parse scheme', function(done) {
        const term = new Terminal();

        fetch('base/spec/apps/terminal/scheme1.in.terminal')
            .then(res => res.text())
            .then(input => {
                const result = term.parse(input);
                const obj = {};

                expect(result).toEqual(expectedScheme1);
                done();
            });
    });
});
