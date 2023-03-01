import Swal from 'sweetalert2';
import API_ENDPOINT from '../../global/api-endpoint';

const DicodingRestaurantApiSource = {
    async allRestaurants() {
        try {
            this._displayLoading();

            const response = await fetch(API_ENDPOINT.ALL_RESTAURANTS);
            const responseJson = await response.json();

            if (!responseJson.error) {
                this._removeLoading();
                return responseJson.restaurants;
            }
        } catch (error) {
            setTimeout(() => {
                this._removeLoading();
                this._showErrorMessage(error);
            }, 5000);
        }
    },

    async detailRestaurant(id) {
        try {
            this._displayLoading();

            const response = await fetch(API_ENDPOINT.DETAIL(id));
            const responseJson = await response.json();

            if (!responseJson.error) {
                this._removeLoading();
                return responseJson.restaurant;
            }
        } catch (error) {
            setTimeout(() => {
                this._removeLoading();
                this._showErrorMessage(error);
            }, 5000);
        }
    },

    async addNewReview(body) {
        try {
            const options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(body),
            };

            const response = await fetch(API_ENDPOINT.ADD_REVIEW, options);
            const responseJson = await response.json();

            if (!responseJson.error) {
                this._showSuccessMessage();
                return responseJson.customerReviews;
            };
        } catch (error) {
            setTimeout(() => {
                this._showErrorMessage(error);
            }, 5000);
        }
    },

    _displayLoading() {
        const mainContent = document.querySelector('#mainContent');
        const loading = document.createElement('div');

        loading.classList.add('loading');
        mainContent.appendChild(loading);
    },

    _removeLoading() {
        const loading = document.querySelector('.loading');
        loading.remove();
    },

    _showErrorMessage(message) {
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
    },

    _showSuccessMessage() {
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
    },
};

export default DicodingRestaurantApiSource;
