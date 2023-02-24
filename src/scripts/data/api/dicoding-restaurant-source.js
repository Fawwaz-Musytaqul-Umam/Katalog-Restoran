import API_ENDPOINT from '../../global/api-endpoint';

class DicodingRestaurantApiSource {
    static async allRestaurants() {
        this.prototype._displayLoading();

        const response = await fetch(API_ENDPOINT.ALL_RESTAURANTS);
        const responseJson = await response.json();

        this.prototype._removeLoading();
        return responseJson.restaurants;
    }

    static async detailRestaurant(id) {
        this.prototype._displayLoading();

        const response = await fetch(API_ENDPOINT.DETAIL(id));
        const responseJson = await response.json();

        this.prototype._removeLoading();
        return responseJson.restaurant;
    }

    _displayLoading() {
        const mainContent = document.querySelector('#mainContent');
        const loader = document.createElement('div');
        loader.classList.add('loading');
        mainContent.appendChild(loader);
    }

    _removeLoading() {
        const loader = document.querySelector('.loading');
        loader.remove();
    }
};

export default DicodingRestaurantApiSource;
