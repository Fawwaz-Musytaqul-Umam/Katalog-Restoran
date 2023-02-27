import DicodingRestaurantApiSource from '../data/api/dicoding-restaurant-source';

class RestaurantReviews extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: 'open'});
    }

    set restaurant(restaurant) {
        this._reviews = restaurant.customerReviews;
        this._restaurantId = restaurant.id;
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = /* html */ `
            ${this.createStylesTemplate()}

            <article class="container">
                <div class="reviews">
                    <h3 class="title">Customer Reviews</h3>
                    ${this.createReviewsTemplate()}
                </div>
                <div class="add-review">
                    <div class="inner">
                        <h3 class="title">Tambahkan Review</h3>
                        <div>
                            <input
                                type="text"
                                id="inputReviewName"
                                class="input-review-name"
                                placeholder="Nama"
                            >
                            <textarea 
                                id="inputReviewDescription"
                                class="input-review-description"
                                placeholder="Review"
                            ></textarea>
                            <button type="submit" id="submitNewReview" class="submit-new-review">KIRIM</button>
                        </div>
                    </div>
                </div>
            </article>
        `;
        const submitNewReviewBtn = this.shadowDOM.querySelector('#submitNewReview');
        submitNewReviewBtn.addEventListener('click', (event) => {
            event.stopPropagation();
            this.sendReviewData();
        });
    }

    createStylesTemplate() {
        return /* html */ `
            <style>
                .container {
                    margin: 16px 0;
                    padding: 16px 20px 32px;
                    background-color: whitesmoke;
                    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
                    border-radius: 5px;
                    overflow: hidden;
                }

                .title {
                    font-size: 18px;
                    text-align: center;
                }

                .customer-review {
                    margin-bottom: 22px;
                    padding: 13px;
                    display: grid;
                    grid-template-rows: 70px 1fr;
                    column-gap: 15px;
                    box-shadow: 2px 2px 4px rgba(000, 000, 000, 0.3);
                    background-color: #ececec;
                    border-radius: 5px;
                }

                .customer-icon {
                    height: 70%;
                    margin-block: auto;
                }

                .customer-review .name {
                    font-size: 14px;
                    margin-block: 3px;
                }

                .customer-review .date {
                    margin-block: 0 3px;
                    color: gray;
                }

                .add-review {
                    margin-top: 35px;
                    box-shadow: 2px 2px 4px rgba(000, 000, 000, 0.3);
                    background-color: #dfdfdf;
                    border-radius: 5px;
                }

                .add-review .inner {
                    max-width: 630px;
                    margin: auto;
                    padding: 20px 15px;
                }

                .add-review .inner div {
                    display: grid;
                    row-gap: 13px;
                    grid-template-rows: 45px 1fr 55px;
                }

                .add-review .inner div input,
                .add-review .inner div textarea {
                    padding: 10px;
                    border: 1px solid gray;
                    border-radius: 10px;
                }

                .add-review .inner .input-review-description {
                    min-height: 70px;
                    resize: vertical;
                }

                .submit-new-review {
                    width: 50%;
                    margin: auto;
                    padding: 10px;
                    background-color: wheat;
                    border: 1px solid gray;
                    border-radius: 7px;
                    cursor: pointer;
                }

                .submit-new-review:active {
                    background-color: gray;
                    color: wheat;
                }

                @media screen and (min-width: 460px) {
                    .customer-review {
                        grid-template-rows: 1fr;
                        grid-template-columns: 70px 1fr;
                    }

                    .customer-icon {
                        width: 80%;
                        height: auto;
                    }
                }
            </style>`;
    }

    createReviewsTemplate() {
        let reviewsTemplate = '';

        this._reviews.forEach((review) => {
            reviewsTemplate += /* html */ `
                <div class="customer-review">
                    <img
                        src="./images/user.png"
                        alt="user icon"
                        class="customer-icon">

                    <div>
                        <h4 class="name">${review.name}</h4>
                        <p class="date">${review.date}</p>
                        <p class="description">${review.review}</p>
                    </div>
                </div>
            `;
        });

        return reviewsTemplate;
    }

    sendReviewData() {
        const name = this.shadowDOM.querySelector('#inputReviewName').value;
        const review = this.shadowDOM.querySelector('#inputReviewDescription').value;

        if (!name && !review) return;

        const newReview = {
            id: this._restaurantId,
            name,
            review,
        };

        DicodingRestaurantApiSource.addNewReview(newReview);
    }
}

customElements.define('restaurant-reviews', RestaurantReviews);
