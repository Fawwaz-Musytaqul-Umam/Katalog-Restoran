import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/responsive.css';

const menu = document.querySelector('#menuButton');
const heroContent = document.querySelector('.hero-content');
const drawer = document.querySelector('#drawer');
const main = document.querySelector('main');

menu.addEventListener('click', function () {
	drawer.classList.toggle('open');

	if (drawer.classList.contains('open')) {
		heroContent.style.display = 'none';
	} else {
		heroContent.style.display = 'block';
	}
});

main.addEventListener('click', function () {
    drawer.classList.remove('open');
})