import 'regenerator-runtime';
import Swal from 'sweetalert2';
import '../styles/main.css';
import '../styles/responsive.css';
import './components/restaurants-container.js';
import swRegister from './utils/sw-register';
import App from './views/app';

const app = new App({
    menuButton: document.querySelector('#menuButton'),
    drawer: document.querySelector('#drawer'),
    hero: document.querySelector('.hero'),
    heroContent: document.querySelector('.hero-content'),
    mainContent: document.querySelector('#mainContent'),
});

window.addEventListener('hashchange', () => {
    app.renderPage();
});

window.addEventListener('load', () => {
    app.renderPage();
    swRegister();
});

window.addEventListener('offline', () => {
    showNetworkStatus({
        icon: 'error',
        title: 'Anda sedang Offline',
    });
});

window.addEventListener('online', () => {
    showNetworkStatus({
        icon: 'success',
        title: 'Anda sudah terhubung ke internet',
    });
});

function showNetworkStatus({icon, title}) {
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3010,
        timerProgressBar: true,
    });

    Toast.fire({icon, title});
};
