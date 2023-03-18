const {setHeadlessWhen, setCommonPlugins} = require('@codeceptjs/configure');
setHeadlessWhen(process.env.HEADLESS);

setCommonPlugins();

/** @type {CodeceptJS.MainConfig} */
exports.config = {
    tests: 'e2e/**/*.spec.js',
    output: 'e2e/outputs',
    helpers: {
        Puppeteer: {
            url: 'http://localhost:9000',
            show: true,
            windowSize: '1200x900',
        },
    },
    include: {
        I: './steps_file.js',
    },
    name: 'restaurant-apps',
};
