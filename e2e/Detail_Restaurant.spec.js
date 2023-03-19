const assert = require('assert');
Feature('Detail Restaurant');

Before(({I}) => {
    I.amOnPage('/#/favorite');
});

Scenario('Liking a Restaurant', async ({I}) => {
    I.see('Belum ada restoran Favorit', '.empty-favorite-restaurant');

    I.amOnPage('/');
    I.waitForElement('.restaurant-item_name a', 3);
    I.seeElement('.restaurant-item_name a');

    const firstRestaurant = locate('.restaurant-item_name a').first();
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
    I.see('Belum ada restoran Favorit', '.empty-favorite-restaurant');
});

Scenario('Add new Review', async ({I}) => {
    I.see('Belum ada restoran Favorit', '.empty-favorite-restaurant');

    I.amOnPage('/');
    I.waitForElement('.restaurant-item_name a', 3);
    I.seeElement('.restaurant-item_name a');

    const firstRestaurant = locate('.restaurant-item_name a').first();
    I.click(firstRestaurant);

    I.waitForElement('#inputReviewName', 3);
    I.seeElement('#inputReviewName');
    I.appendField('#inputReviewName', 'CodeceptJs');

    I.waitForElement('#inputReviewDescription', 3);
    I.seeElement('#inputReviewDescription');
    I.appendField('#inputReviewDescription', 'Hai, kenalkan aku CodeceptJs si automated testing');

    I.seeElement('#submitNewReview');
    I.click('#submitNewReview');
    I.waitForElement('.swal2-popup');
    I.seeElement('.swal2-popup');

    I.wait(8);

    const newReview = locate('.customer-review .name').last();
    const newReviewName = await I.grabTextFrom(newReview);

    assert('CodeceptJs', newReviewName);
});
