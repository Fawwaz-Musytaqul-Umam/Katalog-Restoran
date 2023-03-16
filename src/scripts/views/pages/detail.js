import '../../components/restaurant-detail';
import '../../components/restaurant-reviews';
import DicodingRestaurantApiSource from '../../data/api/dicoding-restaurant-source';
import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import urlParser from '../../routes/url-parser';
import LikeButtonPresenter from '../../utils/like-button-presenter';

class Detail {
    static async render() {
        return /* html */`
            <h2 class="content-title">Detail Restoran</h2>
            <restaurant-detail></restaurant-detail>
            <restaurant-reviews></restaurant-reviews>
            <div id="likeButtonContainer"></div>
        `;
    }

    static async afterRender() {
        const url = urlParser.parseUrlWithoutCombiner();
        const restaurantDetailData = await DicodingRestaurantApiSource.detailRestaurant(url.id);
        const restaurantDetailElement = document.querySelector('restaurant-detail');
        const restaurantReviewsElement = document.querySelector('restaurant-reviews');

        restaurantDetailElement.restaurant = restaurantDetailData;
        restaurantReviewsElement.reviews = restaurantDetailData.customerReviews;
        restaurantReviewsElement.restaurantId = url.id;

        LikeButtonPresenter.init({
            likeButtonContainer: document.querySelector('#likeButtonContainer'),
            favoriteRestaurant: FavoriteRestaurantIdb,
            restaurant: {
                id: restaurantDetailData.id,
                name: restaurantDetailData.name,
                description: restaurantDetailData.description,
                city: restaurantDetailData.city,
                rating: restaurantDetailData.rating,
                pictureId: restaurantDetailData.pictureId,
            },
        });
    }
};

export default Detail;
