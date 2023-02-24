class DrawerInitiator {
    static init({menuButton, drawer, heroContent, content}) {
        menuButton.addEventListener('click', (event) => {
            this.prototype._toggleDrawer(event, drawer, heroContent);
        });

        content.addEventListener('click', (event) => {
            this.prototype._closeDrawer(event, drawer, heroContent);
        });
    }

    _toggleDrawer(event, drawer, heroContent) {
        event.stopPropagation();
        drawer.classList.toggle('open');

        if (drawer.classList.contains('open')) {
            heroContent.style.display = 'none';
        } else {
            heroContent.style.display = 'block';
        }
    }

    _closeDrawer(event, drawer, heroContent) {
        event.stopPropagation();
        drawer.classList.remove('open');
        heroContent.style.display = 'block';
    }
};

export default DrawerInitiator;
