import FavoriteRestaurantIdb from '../src/scripts/data/favorite-restaurant-idb';
import * as TestFactories from './helpers/testFactories';

describe('Unliking a Restaurant', () => {
    beforeEach(async () => {
        addLikeButtonContainer();
        await FavoriteRestaurantIdb.putRestaurant({id: 1});
    });

    afterEach(async () => {
        await FavoriteRestaurantIdb.deleteRestaurant(1);
    });

    it('should display unlike widget when the restaurant has been liked', async () => {
        await TestFactories.createLikeButtonPresenterWithRestaurant({id: 1});

        expect(document.querySelector('[aria-label="Hapus Restoran ini dari favorit"]'))
            .toBeTruthy();
    });

    it('should not display like widget when the restaurant has been liked', async () => {
        await TestFactories.createLikeButtonPresenterWithRestaurant({id: 1});

        expect(document.querySelector('[aria-label="Tambah Restoran ini ke favorit"]'))
            .toBeFalsy();
    });

    it('should be able to remove liked restaurant from the list', async () => {
        await TestFactories.createLikeButtonPresenterWithRestaurant({id: 1});

        document.querySelector('[aria-label="Hapus Restoran ini dari favorit"]').dispatchEvent(new Event('click'));
        expect(await FavoriteRestaurantIdb.getAllRestaurant()).toEqual([]);
    });

    it('should not throw error if the unliked restaurant is not in the list', async () => {
        await TestFactories.createLikeButtonPresenterWithRestaurant({id: 1});

        await FavoriteRestaurantIdb.deleteRestaurant(1);
        document.querySelector('[aria-label="Hapus Restoran ini dari favorit"]').dispatchEvent(new Event('click'));
        expect(await FavoriteRestaurantIdb.getAllRestaurant()).toEqual([]);
    });
});

function addLikeButtonContainer() {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>';
}
