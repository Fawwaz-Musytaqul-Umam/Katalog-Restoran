import Swal from 'sweetalert2';
import API_ENDPOINT from '../../global/api-endpoint';

class DicodingRestaurantApiSource {
    static async allRestaurants() {
        try {
            this.prototype.displayLoading();

            const response = await fetch(API_ENDPOINT.ALL_RESTAURANTS);
            const responseJson = await response.json();

            this.prototype.removeLoading();
            return responseJson.restaurants;
        } catch (error) {
            setTimeout(() => {
                this.prototype.removeLoading();
                this.prototype.showResponseMessage();
            }, 5000);
        }
    }

    static async detailRestaurant(id) {
        try {
            this.prototype.displayLoading();

            const response = await fetch(API_ENDPOINT.DETAIL(id));
            const responseJson = await response.json();

            this.prototype.removeLoading();
            return responseJson.restaurant;
        } catch (error) {
            setTimeout(() => {
                this.prototype.removeLoading();
                this.prototype.showErrorMessage(error);
            }, 5000);
        }
    }

    static async addNewReview(body) {
        try {
            const options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(body),
            };

            const restaurantReviewsElement = document.querySelector('restaurant-reviews');
            const response = await fetch(API_ENDPOINT.ADD_REVIEW, options);
            const responseJson = await response.json();

            this.prototype.showResponseMessage();
            restaurantReviewsElement.restaurant = responseJson;
        } catch (error) {
            setTimeout(() => {
                this.prototype.showErrorMessage(error);
            }, 5000);
        }
    }

    displayLoading() {
        const mainContent = document.querySelector('#mainContent');
        const loader = document.createElement('div');
        loader.classList.add('loading');
        mainContent.appendChild(loader);
    }

    removeLoading() {
        const loader = document.querySelector('.loading');
        loader.remove();
    }

    showErrorMessage(message) {
        Swal.fire({
            icon: 'error',
            title: '_ERROR_',
            text: message,
            timer: 10000,
            footer: /* html */
                    `<a href="https://github.com/fawwaz-m-umam/Katalog-Restoran/issues">
                        Laporkan Masalah
                    </a>`,
        });
    }

    showResponseMessage() {
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 4000,
            timerProgressBar: true,
        });

        Toast.fire({
            icon: 'success',
            title: 'Berhasil Mengirim Review',
        });
    }
};

export default DicodingRestaurantApiSource;
