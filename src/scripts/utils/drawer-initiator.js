const DrawerInitiator = {
    init({menuButton, drawer, heroContent, content}) {
        menuButton.addEventListener('click', (event) => {
            this._toggleDrawer(event, drawer, heroContent);
        });

        content.addEventListener('click', (event) => {
            this._closeDrawer(event, drawer, heroContent);
        });
    },

    _toggleDrawer(event, drawer, heroContent) {
        event.stopPropagation();
        drawer.classList.toggle('open');

        if (drawer.classList.contains('open')) {
            heroContent.style.display = 'none';
        } else {
            heroContent.style.display = 'block';
        }
    },

    _closeDrawer(event, drawer, heroContent) {
        event.stopPropagation();
        drawer.classList.remove('open');
        heroContent.style.display = 'block';
    },
};

export default DrawerInitiator;
