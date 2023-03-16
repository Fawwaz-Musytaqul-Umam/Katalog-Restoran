const LikeButtonPresenter = {
    async init({likeButtonContainer, favoriteRestaurant, restaurant}) {
        this._likeButtonContainer = likeButtonContainer;
        this._restaurant = restaurant;
        this._favoriteRestaurant = favoriteRestaurant;

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
        const restaurant = await this._favoriteRestaurant.getRestaurant(id);
        return !!restaurant;
    },

    _renderLikedButton() {
        this._likeButtonContainer.innerHTML = createLikedRestaurantButtonTemplate();

        const likeButton = document.querySelector('#likeButton');
        likeButton.addEventListener('click', async () => {
            await this._favoriteRestaurant.deleteRestaurant(this._restaurant.id);
            this._renderButton();
        });
    },

    _renderLikeButton() {
        this._likeButtonContainer.innerHTML = createLikeRestaurantButtonTemplate();

        const likeButton = document.querySelector('#likeButton');
        likeButton.addEventListener('click', async () => {
            await this._favoriteRestaurant.putRestaurant(this._restaurant);
            this._renderButton();
        });
    },
};

function createLikeRestaurantButtonTemplate() {
    return /* html */`
        <button class="like" id="likeButton" aria-label="Tambah Restoran ini ke favorit">
            <i class='bx bx-heart'></i>
        </button>`;
}

function createLikedRestaurantButtonTemplate() {
    return /* html */`
        <button class="like liked" id="likeButton" aria-label="Hapus Restoran ini dari favorit">
            <i class='bx bxs-heart'></i>
        </button>`;
}

export default LikeButtonPresenter;
