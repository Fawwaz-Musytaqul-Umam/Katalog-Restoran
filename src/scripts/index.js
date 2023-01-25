import 'regenerator-runtime';
import '../styles/main.css';
import '../styles/responsive.css';
import './components/restaurants-container.js';

// Menu
const menu = document.querySelector('#menuButton');
const heroContent = document.querySelector('.hero-content');
const drawer = document.querySelector('#drawer');
const main = document.querySelector('main');

menu.addEventListener('click', function(event) {
    drawer.classList.toggle('open');
    event.stopPropagation();

    if (drawer.classList.contains('open')) {
        heroContent.style.display = 'none';
    } else {
        heroContent.style.display = 'block';
    }
});

main.addEventListener('click', function() {
    drawer.classList.remove('open');
});
