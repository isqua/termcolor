import EventEmitter from './eventEmitter.js';

export default class Uploader extends EventEmitter {
    /**
     * @param {HTMLInputElement} input
     */
    constructor(input) {
        super();

        this.input = input;

        this.input.addEventListener('change', this._onChange.bind(this))
    }

    _onChange() {
        const file = this.input.files && this.input.files[0];

        if ( ! file) {
            return;
        }

        this._readFile(file)
            .then(filecontent => {
                /**
                 * @type {Object}
                 * @property {String} name
                 * @property {String} content
                 */
                const fileData = {
                    name: file.name,
                    content: filecontent
                };

                this.emit('change', fileData);
            })
            .catch(error => {
                this.emit('error', {
                    name: file.name,
                    error: error
                })
            })
    }

    /**
     * @param {File} file
     * @returns {Promise}
     */
    _readFile(file) {
        return new Promise((resolve) => {
            const reader = new FileReader();

            reader.addEventListener('load', () => {
                resolve(reader.result);
            });

            reader.readAsText(file);
        });
    }
}
