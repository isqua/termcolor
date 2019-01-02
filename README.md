# Colorator

The application to convert color scheme of one app (e.x. terminal emulator) to scheme of another app. See list of supported apps in [js/apps](js/apps). If you want add some app, send me a pull request!

Also the app demonstrates some ideas.

## What’s inside

### Loading ES6 modules in browser

The application works without transpiling: just start any http server and open index.html file — javascript modules will load at browser by imports. Works in Chrome.

### Serverless parsing files (in browser)

See [js/uploader/index.js](js/uploader/index.js) for example. It is implemented by FileReader interface.

### Serverless downloading files

See [js/downloader/index.js](js/downloader/index.js) for example. It is implemented by Blob and URL.createObjectURL method.

### Creating XML files with JavaScript

See [js/utils/plist.js](js/utils/plist.js) for example. It is implemented by document.implementation.createDocument and XMLSerializer.

### Very simple JSON template engine

See implementation in [js/utils/template.js](js/utils/template.js). You can find usage of it in [js/preview/index.js](js/preview/index.js)

### Type check with jsdoc

Checking types by Typescript without writing typescrit (describing types in jsdoc). See `tsc` script in [package.json](package.json) and [#1](https://github.com/isqua/termcolor/pull/1) pull request.
