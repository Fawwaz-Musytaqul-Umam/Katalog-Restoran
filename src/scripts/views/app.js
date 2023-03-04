import Swal from 'sweetalert2';
import routes from '../routes/routes';
import UrlParser from '../routes/url-parser';
import DrawerInitiator from '../utils/drawer-initiator';

class App {
    constructor({menuButton, drawer, heroContent, content}) {
        this.menuButton = menuButton;
        this.drawer = drawer;
        this.heroContent = heroContent;
        this.content = content;

        this._initialAppShell();
    }

    _initialAppShell() {
        DrawerInitiator.init({
            menuButton: this.menuButton,
            drawer: this.drawer,
            heroContent: this.heroContent,
            content: this.content,
        });
    }

    async renderPage() {
        const url = UrlParser.parseUrlWithCombiner();
        const page = routes[url];

        if (!page) {
            this.content.innerHTML = '';
            Swal.fire({
                title: 'Oops..!',
                text: '404 PAGE NOT_FOUND',
                showConfirmButton: false,
                timerProgressBar: true,
                timer: 3500,
            });

            setTimeout(async () => {
                window.location.replace('/');
            }, 4500);
        }

        this.content.innerHTML = await page.render();
        await page.afterRender();

        const skipLinkElement = document.querySelector('.skip-link');
        skipLinkElement.addEventListener('click', (event) => {
            event.preventDefault();
            document.querySelector('#mainContent').focus();
        });
    }
};

export default App;
