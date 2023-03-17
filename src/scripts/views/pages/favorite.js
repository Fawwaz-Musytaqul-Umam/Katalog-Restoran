import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import '../../components/restaurants-container';

class Favorite {
    static async render() {
        return /* html */ `
            <h2 class="content-title">Favorit</h2>
            <p class="empty-favorite-restaurant">Belum ada restoran Favorit</p>
            <restaurants-container></restaurants-container>
        `;
    }

    static async afterRender() {
        const favoriteRestaurantData = await FavoriteRestaurantIdb.getAllRestaurant();
        const restaurantsContainer = document.querySelector('restaurants-container');
        restaurantsContainer.restaurants = favoriteRestaurantData;

        if (favoriteRestaurantData.length > 0) {
            const noFavoriteRestaurantElement = document.querySelector('.empty-favorite-restaurant');
            noFavoriteRestaurantElement.remove();
        }
    }
};

export default Favorite;
