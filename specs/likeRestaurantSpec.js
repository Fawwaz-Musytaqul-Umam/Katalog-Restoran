import FavoriteRestaurantIdb from '../src/scripts/data/favorite-restaurant-idb';
import * as TestFactories from './helpers/testFactories';

describe('Liking a Restaurant', () => {
    beforeEach(() => {
        addLikeButtonContainer();
    });

    it('should show the like button when the restaurant has not been liked before', async () => {
        await TestFactories.createLikeButtonPresenterWithRestaurant({id: 1});

        expect(document.querySelector('[aria-label="Tambah Restoran ini ke favorit"]')).toBeTruthy();
    });

    it('should show the like button when the restaurant has not been liked before', async () => {
        await TestFactories.createLikeButtonPresenterWithRestaurant({id: 1});

        expect(document.querySelector('[aria-label="Hapus Restoran ini dari favorit"]')).toBeFalsy();
    });

    it('should be able to like the restaurant', async () => {
        await TestFactories.createLikeButtonPresenterWithRestaurant({id: 1});

        document.querySelector('#likeButton').dispatchEvent(new Event('click'));
        const restaurant = await FavoriteRestaurantIdb.getRestaurant(1);
        expect(restaurant).toEqual({id: 1});

        FavoriteRestaurantIdb.deleteRestaurant(1);
    });

    it('should not add a restaurant again when its already liked', async () => {
        await TestFactories.createLikeButtonPresenterWithRestaurant({id: 1});

        await FavoriteRestaurantIdb.putRestaurant({id: 1});
        document.querySelector('#likeButton').dispatchEvent(new Event('click'));
        expect(await FavoriteRestaurantIdb.getAllRestaurant()).toEqual([{id: 1}]);

        FavoriteRestaurantIdb.deleteRestaurant(1);
    });

    it('should not add a restaurant when it has no id', async () => {
        await TestFactories.createLikeButtonPresenterWithRestaurant({});

        document.querySelector('#likeButton').dispatchEvent(new Event('click'));
        expect(await FavoriteRestaurantIdb.getAllRestaurant()).toEqual([]);
    });
});

function addLikeButtonContainer() {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>';
}
