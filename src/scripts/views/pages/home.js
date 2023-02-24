import '../../components/restaurants-container';
import DicodingRestaurantApiSource from '../../data/api/dicoding-restaurant-source';

const home = {
    async render() {
        return /* html */ `
            <h2 class="content-title">Jelajahi Restoran</h2>
            <restaurants-container></restaurants-container>
        `;
    },

    async afterRender() {
        const allRestaurantsData = await DicodingRestaurantApiSource.allRestaurants();
        const restaurantsContainer = document.querySelector('restaurants-container');
        restaurantsContainer.restaurants = allRestaurantsData;
    },
};

export default home;
