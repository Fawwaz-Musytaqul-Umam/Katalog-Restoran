/* eslint-disable no-console */
import * as WorkboxWindow from 'workbox-window';

const swRegister = async () => {
    if (!('serviceWorker' in navigator)) {
        console.warn('Service Worker not supported in the browser');
        return;
    }

    const wb = new WorkboxWindow.Workbox('./sw.bundle.js');

    try {
        await wb.register();
    } catch (error) {
        console.error('Failed to register service worker', error);
    }
};

export default swRegister;
