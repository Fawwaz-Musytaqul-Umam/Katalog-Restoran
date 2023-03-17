Feature('liking restaurant');

Before(({I}) => {
    I.amOnPage('/#/favorite');
});

Scenario('Liking Restaurant', async ({I}) => {
    I.see('Belum ada restaurant Favorit', '.empty-favorite-restaurant');

    I.amOnPage('/');
    I.waitForElement('restaurant-item a', 2);
    I.seeElement('restaurant-item a');
});
