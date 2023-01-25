import './restaurant-item.js';
import data from '../../DATA.json';

class RestaurantsContainer extends HTMLElement {
    connectedCallback() {
        this.innerHTML = '';

        data.restaurants.forEach((restaurant) => {
            const restaurantItem = document.createElement('restaurant-item');
            restaurantItem.data = restaurant;

            this.appendChild(restaurantItem);
        });
    }
}

customElements.define('restaurants-container', RestaurantsContainer);
