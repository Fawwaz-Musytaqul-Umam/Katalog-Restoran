import '../../components/restaurant-detail';
import DicodingRestaurantApiSource from '../../data/api/dicoding-restaurant-source';
import urlParser from '../../routes/url-parser';

class Detail {
    static async render() {
        return /* html */ `
            <h2 class="content-title">Detail Restoran</h2>
            <restaurant-detail></restaurant-detail>
            <i class='bx bx-heart like'></i>
        `;
    }

    static async afterRender() {
        const url = urlParser.parseUrlWithoutCombiner();
        const restaurantDetailData = await DicodingRestaurantApiSource.detailRestaurant(url.id);
        const restaurantDetailElement = document.querySelector('restaurant-detail');
        restaurantDetailElement.restaurant = restaurantDetailData;
    }
};

export default Detail;
