Feature('liking restaurant');

Before(({I}) => {
    I.amOnPage('/#/favorite');
});

Scenario('Liking Restaurant', async ({I}) => {
    I.see('Belum Ada Restaurant Favorit Tersimpan', '.empty-fav');

    I.amOnPage('/');
    I.waitForElement('restaurant-item a', 2);
    I.seeElement('restaurant-item a');
});
