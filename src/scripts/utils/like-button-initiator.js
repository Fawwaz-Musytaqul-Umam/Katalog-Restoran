import FavoriteRestaurantIdb from '../data/favorite-restaurant-idb';

const LikeButtonInitiator = {
    async init({likeButtonContainer, restaurant}) {
        this._likeButtonContainer = likeButtonContainer;
        this._restaurant = restaurant;

        await this._renderButton();
    },

    async _renderButton() {
        const {id} = this._restaurant;

        if (await this._isRestaurantExist(id)) {
            this._renderLikedButton();
        } else {
            this._renderLikeButton();
        }
    },

    async _isRestaurantExist(id) {
        const restaurant = await FavoriteRestaurantIdb.getRestaurant(id);
        return !!restaurant;
    },

    _renderLikedButton() {
        this._likeButtonContainer.innerHTML = /* html */`
            <button class="like liked" id="likeButton" aria-label="Hapus Restoran ini dari favorit">
                <i class='bx bxs-heart'></i>
            </button>
        `;

        const likeButton = document.querySelector('#likeButton');
        likeButton.addEventListener('click', async () => {
            await FavoriteRestaurantIdb.deleteRestaurant(this._restaurant.id);
            this._renderButton();
        });
    },

    _renderLikeButton() {
        this._likeButtonContainer.innerHTML = /* html */`
            <button class="like" id="likeButton" aria-label="Tambah Restoran ini ke favorit">
                <i class='bx bx-heart'></i>
            </button>
        `;

        const likeButton = document.querySelector('#likeButton');
        likeButton.addEventListener('click', async () => {
            await FavoriteRestaurantIdb.putRestaurant(this._restaurant);
            this._renderButton();
        });
    },
};

export default LikeButtonInitiator;
