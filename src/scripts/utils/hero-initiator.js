const HeroInitiator = {
    init({hero}) {
        this.hero = hero;

        const mediaQuery = window.matchMedia('(min-width: 768px)');
        addHeroBackgroundImage(mediaQuery);
        mediaQuery.addListener(addHeroBackgroundImage);
    },
};

const addHeroBackgroundImage = (mediaQuery) => {
    if (mediaQuery.matches) {
        HeroInitiator.hero.style.background = './images/heros/hero-image-large.jpg';
    } else {
        HeroInitiator.hero.style.background = './images/heros/hero-image-small.jpg';
    }
};

export default HeroInitiator;
