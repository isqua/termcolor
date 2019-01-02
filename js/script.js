import { has } from './utils/lodash.js';
import apps from './apps/index.js';
import Uploader from './uploader/index.js';
import Downloader from './downloader/index.js';
import Preview from './preview/index.js';
import Support from './support/index.js'
import Notifications from './notifications/index.js';

const uploader = new Uploader(document.querySelector('.uploader-control'));
const downloader = new Downloader(document.querySelector('.downloader'));
const preview = new Preview(document.querySelector('.terminal'));
const support = new Support(document.querySelector('.support-table'));
const notifications = new Notifications(document.querySelector('.notifications'));

support.update(apps);

uploader.on('change', file => {
    const filename = file.name;
    const AppConstructor = apps.find(app => app.doesSupport(filename));

    if ( ! AppConstructor) {
        notifications.showNotification(`Format of “${filename}” is not supported.`)
        return;
    }

    const inputApp = new AppConstructor();

    const scheme = inputApp.parse(file.content);
    const title = AppConstructor.getName(filename);

    preview.title = `${title} for ${AppConstructor.title}`;
    preview.scheme = scheme;

    const outputApps = apps.filter(app => {
        const mayStringify = has(app.prototype, 'stringify');

        return app !== AppConstructor && mayStringify;
    });

    /** @type {CS.FileInfo[]} */
    const downloadItems = outputApps.map(App => {
        const app = new App();
        const filename = App.getFileName(title);

        const content = app.stringify(scheme);

        /** @type {CS.FileInfo} */
        return {
            title: App.title,
            mimeType: App.mimeType,
            filename,
            content
        };
    });

    downloader.update(downloadItems);
});
