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

    menus() {
        const {foods, drinks} = this._restaurant.menus;
        let foodsTemplate = '';
        let drinksTemplate = '';

        foods.forEach((food) => {
            foodsTemplate += /* html */`
                <li>${food.name}</li>
            `;
        });

        drinks.forEach((drink) => {
            drinksTemplate += /* html */`
                <li>${drink.name}</li>
            `;
        });

        return /* html */`
            <p>Makanan :</p>
            <ul>${foodsTemplate}</ul>
            <p>Minuman :</p>
            <ul>${drinksTemplate}</ul>
        `;
    }

    render() {
        this.shadowDOM.innerHTML = /* html */ `
            ${this.styles()}

            <div class="container">
                <img 
                    src="${CONFIG.BASE_IMAGE_URL}/${this._restaurant.pictureId}"
                    alt="${this._restaurant.name}"
                    class="thumbnail">

                <div class="city">
                    <p class="city-name">${this._restaurant.city}</p>
                </div>
                <div class="content">
                    <h3 class="name">${this._restaurant.name}</h3>
                    <p>Rating : &#11088;${this._restaurant.rating}</p>
                    <p>Alamat : ${this._restaurant.address}</p>
                    <P>${this._restaurant.description}</P>

                    <div class="menus">
                        <h4 class="menu-title">Menu Makanan dan Minumam</h4>
                        ${this.menus()}
                    </div>
                </div>
                <i class='bx bxs-heart like'></i>
            </div>
        `;
    }

    styles() {
        return /* html */ `
            <style>
                .container {
                    position: relative;
                    width: 100%;
                    margin: 16px 0;
                    background-color: whitesmoke;
                    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
                    border-radius: 5px;
                    overflow: hidden;
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

                .content {
                    padding: 16px 16px 32px;
                }

                .name {
                    margin-block: 7px;
                    font-size: 18px;
                }

                .menus {
                    margin-top: 15px;
                    padding: 15px;
                    background-color: #ececec;
                    border-top: 1px solid gray;
                    border-bottom: 1px solid gray;
                }

                .menu-title {
                    margin-block: 7px;  
                    font-size: 14px;
                }
            </style>`;
    }
};

customElements.define('restaurant-detail', RestaurantDetail);
