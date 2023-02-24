import CONFIG from "../global/config";

/* eslint-disable no-tabs */
class RestaurantItem extends HTMLElement {
    set restaurant(restaurant) {
        this._restaurant = restaurant;
        this.render();
    }

    render() {
        this.innerHTML = /* html*/ `
        <article>
			<div class="restaurant-item_city">
				<span class="city-name">${this._restaurant.city}</span>
			</div>

			<img
				src="${CONFIG.BASE_IMAGE_URL}/${this._restaurant.pictureId}"
				alt="Restoran: ${this._restaurant.name}"
				class="restaurant-item_thumbnail"
			/>

			<div class="restaurant-item_content">
				<span class="restaurant-item_rating">
					Rating : &#11088; ${this._restaurant.rating}
				</span>

				<h3 class="restaurant-item_title">
					<a href="#/detail/${this._restaurant.id}">
						${this._restaurant.name}
					</a>
				</h3>

				<p class="restaurant-item_description">
					${this._restaurant.description}
				</p>
			</div>
		</article>`;
    }
}

customElements.define('restaurant-item', RestaurantItem);
