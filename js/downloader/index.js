const DOWNLOADER_BUTTON = 'downloader-button';

export default class Downloader {
    /**
     * @param {HTMLElement} domElem
     */
    constructor(domElem) {
        this.domElem = domElem;
    }

    /**
     * @param {Array<CS.FileInfo>} files
     */
    update(files) {
        const fragment = document.createDocumentFragment();

        files.forEach(file => {
            fragment.appendChild(this._createLink(file))
        });

        this.domElem.innerHTML = '';
        this.domElem.appendChild(fragment);
    }

    /**
     * @param {CS.FileInfo} fileinfo
     * @returns {HTMLAnchorElement}
     */
    _createLink(fileinfo) {
        const blob = new Blob([ fileinfo.content ], { type: fileinfo.mimeType });

        const link = document.createElement('a');

        link.textContent = fileinfo.title;
        link.download = fileinfo.filename;
        link.href = URL.createObjectURL(blob);
        link.classList.add(DOWNLOADER_BUTTON);

        return link;
    }
}
