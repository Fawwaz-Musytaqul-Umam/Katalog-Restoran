class RestaurantDetail extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: 'open'});
    }

    connectedCallback() {
        this.shadowDOM.innerHTML = /* html */`
            <h1>HALO MAS BROW</h1>
        `;
    }
};

customElements.define('restaurant-detail', RestaurantDetail);
