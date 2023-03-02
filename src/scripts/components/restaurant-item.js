import CONFIG from '../global/config';

/* eslint-disable no-tabs */
class RestaurantItem extends HTMLElement {
    set restaurant(restaurant) {
        this._restaurant = restaurant;
        this.render();
    }

    render() {
        const {city, pictureId, name, rating, id, description} = this._restaurant;

        this.innerHTML = /* html*/ `
        <article>
			<div class="restaurant-item_city">
				<span class="city-name">${city}</span>
			</div>

			<img
				src="${CONFIG.BASE_IMAGE_URL}/${pictureId}"
				alt="Restoran: ${name}"
				class="restaurant-item_thumbnail"
			/>

			<div class="restaurant-item_content">
				<span class="restaurant-item_rating">
					Rating : &#11088; ${rating}
				</span>

				<h3 class="restaurant-item_name">
					<a href="#/detail/${id}">
						${name}
					</a>
				</h3>

				<p class="restaurant-item_description">
					${description}
				</p>
			</div>
		</article>`;
    }
}

customElements.define('restaurant-item', RestaurantItem);
