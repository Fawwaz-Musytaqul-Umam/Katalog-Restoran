import './restaurant-item.js';

class RestaurantsContainer extends HTMLElement {
    set restaurants(restaurants) {
        this._restaurants = restaurants;
        this.render();
    }

    render() {
        this.innerHTML = '';

        this._restaurants.forEach((restaurant) => {
            const restaurantItem = document.createElement('restaurant-item');
            restaurantItem.restaurant = restaurant;

            this.appendChild(restaurantItem);
        });
    }
}

customElements.define('restaurants-container', RestaurantsContainer);
