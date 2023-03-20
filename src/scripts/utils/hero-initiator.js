class HeroInitiator {
    static init({hero}) {
        this.hero = hero;

        const mediaQuery = window.matchMedia('(min-width: 767px)');
        mediaQuery.addEventListener('change', addHeroBackgroundImage);
        addHeroBackgroundImage(mediaQuery);
    }
};

const addHeroBackgroundImage = (event) => {
    if (event.matches) {
        HeroInitiator.hero.style.backgroundImage = 'url(./images/heros/hero-image-large.jpg)';
    } else {
        HeroInitiator.hero.style.backgroundImage = 'url(./images/heros/hero-image-medium.jpg)';
    }
};

export default HeroInitiator;
