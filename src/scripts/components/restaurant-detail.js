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
            ${this.createStylesTemplate()}

            <article class="container">
                <div class="city">
                    <p class="city-name">${this._restaurant.city}</p>
                </div>

                <div class="content">
                    <img 
                        src="${CONFIG.BASE_IMAGE_URL}/${this._restaurant.pictureId}"
                        alt="${this._restaurant.name}"
                        class="thumbnail"
                    >

                    <div class="info">
                        <h3 class="name">${this._restaurant.name}</h3>
                        <p>Rating : &#11088;${this._restaurant.rating}</p>
                        <p>Alamat : ${this._restaurant.address}</p>
                        <P>${this._restaurant.description}</P>
                    </div>
                </div>

                <div class="menus">
                    <h4 class="menu-title">Menu Makanan dan Minumam</h4>
                    ${this.createMenusTemplate()}
                </div>
            </article>
        `;
    }

    createStylesTemplate() {
        return /* html */ `
            <style>
                .container {
                    position: relative;
                    margin: 18px 0;
                    background-color: whitesmoke;
                    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
                    border-radius: 5px;
                    overflow: hidden;
                }

                .thumbnail {
                    width: 100%;
                    object-fit: cover;
                    object-position: center;
                }

                .city {
                    top: 20px;
                    position: absolute;
                    min-width: 105px;
                    padding: 8px 18px;
                    text-align: center;
                    background-color: rgba(255, 200, 61, 0.753);
                    border-radius: 0 7px 7px 0;
                    backdrop-filter: blur(5px);
                    box-shadow: 2px 3px 3px rgba(0, 0, 0, 0.7);
                }

                .city-name {
                    margin-block: 0;
                    font-weight: bold;
                    color: black;
                }

                .info {
                    padding: 16px 16px 32px;
                }

                .name {
                    margin-block: 7px;
                    font-size: 18px;
                }

                .menus {
                    margin: 15px;
                    padding: 15px;
                    background-color: #ececec;
                    border-top: 1px solid gray;
                    border-bottom: 1px solid gray;
                }

                .menus-foods,
                .menus-drinks {
                    margin-block: 25px;
                }

                .menu-title {
                    margin-block: 7px;  
                    font-size: 14px;
                }

                @media screen and (min-width: 778px) {
                    .container {
                        display: grid;
                        grid-template-columns: 53vw 1fr;
                    }

                    .content {
                        font-size: 1.1em;
                        border-right: 1px solid gray;
                    }
                    
                    .menus {
                        margin: 0;
                        padding: 25px;
                        border: none;
                    }
                }
            </style>`;
    }

    createMenusTemplate() {
        const {foods, drinks} = this._restaurant.menus;
        let foodsTemplate = '';
        let drinksTemplate = '';

        foods.forEach((food) => {
            foodsTemplate += /* html */ `
                <li>${food.name}</li>
            `;
        });

        drinks.forEach((drink) => {
            drinksTemplate += /* html */ `
                <li>${drink.name}</li>
            `;
        });

        return /* html */ `
            <div class="menus-foods">
                <p><b>Makanan :</b></p>
                <ul>${foodsTemplate}</ul>
            </div>

            <div class="menus-drinks">
                <p><b>Minuman :</b></p>
                <ul>${drinksTemplate}</ul>
            </div>
        `;
    }
};

customElements.define('restaurant-detail', RestaurantDetail);
