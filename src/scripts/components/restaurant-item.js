/* eslint-disable no-tabs */
class RestaurantItem extends HTMLElement {
    set data(data) {
        this._data = data;
        this.render();
    }

    render() {
        this.innerHTML = /* html*/ `
        <article>
			<div class="restaurant-item_city">
				<span class="city-name">${this._data.city}</span>
			</div>

			<img
				src="${this._data.pictureId}"
				alt="Gambar Restoran"
				class="restaurant-item_thumbnail"
			/>

			<div class="restaurant-item_content">
				<p class="restaurant-item_rating">
					Rating : &#11088; ${this._data.rating}
				</p>

				<h3 class="restaurant-item_title">${this._data.name}</h3>
				<p class="restaurant-item_description">${this._data.description}</p>
			</div>
		</article>`;
    }
}

customElements.define('restaurant-item', RestaurantItem);
