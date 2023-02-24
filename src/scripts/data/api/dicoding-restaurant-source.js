import API_ENDPOINT from '../../global/api-endpoint';

class DicodingRestaurantApiSource {
    static async restaurantList() {
        const response = await fetch(API_ENDPOINT.RESTAURANT_LIST);
        const responseJson = await response.json();
        return responseJson.restaurants;
    }
};

export default DicodingRestaurantApiSource;
