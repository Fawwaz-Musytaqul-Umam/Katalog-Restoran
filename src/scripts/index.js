import 'regenerator-runtime';
import Swal from 'sweetalert2';
import '../styles/main.css';
import '../styles/responsive.css';
import './components/restaurants-container.js';
import App from './views/app';

const app = new App({
    menuButton: document.querySelector('#menuButton'),
    drawer: document.querySelector('#drawer'),
    heroContent: document.querySelector('.hero-content'),
    content: document.querySelector('#mainContent'),
});

window.addEventListener('hashchange', () => {
    app.renderPage();
});

window.addEventListener('load', () => {
    app.renderPage();
});

window.addEventListener('offline', () => {
    Swal.fire({
        position: 'top',
        icon: 'error',
        imageWidth: '50px',
        imageHeight: '50px',
        title: 'Anda sedang offline',
        showConfirmButton: false,
        timer: 2000,
    });
});

window.addEventListener('online', () => {
    Swal.fire({
        position: 'top',
        icon: 'success',
        imageWidth: '50px',
        imageHeight: '50px',
        title: 'Kembali Online',
        showConfirmButton: false,
        timer: 2000,
    });
    app.renderPage();
});
