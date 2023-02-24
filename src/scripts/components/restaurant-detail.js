import CONFIG from '../global/config';

class RestaurantDetail extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: 'open'});
    }

    set restaurant(restaurant) {
        this._restaurant = restaurant;
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = /* html */ `
            <style>
                .container {
                    max-width: 100%;
                    display: grid;
                }

                .thumbnail {
                    width: 100%;
                }
            </style>

            <div class="container">
                <img 
                    src="${CONFIG.BASE_IMAGE_URL}/${this._restaurant.pictureId}"
                    alt="${this._restaurant.name}"
                    class="thumbnail">
                
                <div class="info">
                    <h3 class="name">${this._restaurant.name}</h3>
                    <p>Rating : &#11088;${this._restaurant.rating}</p>
                    <p>Kota : ${this._restaurant.city}</p>
                    <P>${this._restaurant.description}</P>
                </div>
            </div>
        `;
    }
};

customElements.define('restaurant-detail', RestaurantDetail);
