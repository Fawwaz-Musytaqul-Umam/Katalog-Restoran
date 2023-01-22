import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/responsive.css';

const menu = document.querySelector('#menuButton');
const appBar = document.querySelector('.app-bar')
const drawer = document.querySelector('#drawer');

menu.addEventListener('click', function () {
    drawer.classList.toggle('open')
})
