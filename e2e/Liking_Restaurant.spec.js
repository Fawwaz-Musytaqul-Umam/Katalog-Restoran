const assert = require('assert');
Feature('liking restaurant');

Before(({I}) => {
    I.amOnPage('/#/favorite');
});

Scenario('Liking a Restaurant', async ({I}) => {
    I.see('Belum ada restoran Favorit', '.empty-favorite-restaurant');

    I.amOnPage('/');
    I.waitForElement('.restaurant-item_name a', 3);
    I.seeElement('.restaurant-item_name a');

    const firstRestaurant = locate('.restaurant-tem a').first();
    const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);

    I.click(firstRestaurant);

    I.waitForElement('#likeButton', 3);
    I.seeElement('#likeButton');
    I.click('#likeButton');

    I.amOnPage('/#/favorite');
    I.seeElement('.restaurant-item_name');
    const likedRestaurant = await I.grabTextFrom('.restaurant-item_name a');

    assert.strictEqual(firstRestaurantTitle, likedRestaurant);
});

Scenario('Unlike a Restaurant', async ({I}) => {
    I.see('Belum ada restoran Favorit', '.empty-favorite-restaurant');

    I.amOnPage('/');
    I.waitForElement('.restaurant-item_name a', 3);
    I.seeElement('.restaurant-item_name a');

    const firstRestaurant = locate('.restaurant-item_name a').first();
    I.click(firstRestaurant);

    I.waitForElement('#likeButton', 3);
    I.seeElement('#likeButton');
    I.click('#likeButton');

    I.amOnPage('/#/favorite');
    I.seeElement('.restaurant-item_name');
    I.click(firstRestaurant);

    I.waitForElement('#likeButton', 3);
    I.seeElement('#likeButton');
    I.click('#likeButton');

    I.amOnPage('/#/favorite');
    I.dontSee('.restaurant-item_name');
    I.see('Belum ada Restoran Favorit', '.empty-favorite-restaurant');
});

Scenario('Add new Review', async ({I}) => {
    I.see('Belum ada restaurant Favorit', '.empty-favorite-restaurant');

    I.amOnPage('/');
    I.waitForElement('.restaurant-item_name a', 3);
    I.seeElement('.restaurant-item_name a');

    const firstRestaurant = locate('.restaurant-item_name a').first();
    I.click(firstRestaurant);
    I.waitForElement('#inputReviewName', 3);
    I.waitForElement('#inputReviewDescription', 3);

    I.appendField('#inputReviewName', 'CodeceptJs');
    I.appendField('#inputReviewDescription', 'ini review menggunakan test end to end');
    I.click('#submitNewReview');

    I.wait(8);

    const newReview = locate('.cusromer-review .name').last();
    const newReviewName = await I.grabTextFrom(newReview);

    assert('CodeceptJs', newReviewName);
});
