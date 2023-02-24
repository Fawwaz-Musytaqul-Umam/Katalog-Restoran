import 'regenerator-runtime';
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
