import Urxvt from '../../../js/apps/urxvt.js';
import scheme from './scheme.in.js';

describe('urxvt', function() {
    it('should stringify scheme', function(done) {
        fetch('base/spec/apps/urxvt/scheme.out.Xresources')
            .then(res => res.text())
            .then(expected => {
                const term = new Urxvt();
                const result = term.stringify(scheme);

                expect(result).toBe(expected);
                done();
            });
    });
});
