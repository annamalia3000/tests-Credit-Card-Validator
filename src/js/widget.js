import { handleFormSubmit } from './handleFormSubmit';

export class CardFormWidget {
    constructor(parentEl) {
        this.parentEl = parentEl;
    }

    static get markup() {
        return `
        <div class="credit-cards">
            <h3 class="title">Check your credit card number</h3>
            <ul class="cards-list">
                <li class="card-item">
                    <span class="card visa">Visa</span>
                </li>
                <li class="card-item">
                    <span class="card master">Master</span>
                </li>
                <li class="card-item">
                    <span class="card amex">Amex</span>
                </li>
                <li class="card-item">
                    <span class="card discover">Discover</span>
                </li>
                <li class="card-item">
                    <span class="card jcb">JCB</span>
                </li>
                <li class="card-item">
                    <span class="card mir">Mir</span>
                </li>
            </ul>
            <form class="card-number-form">
                <input class="card-number-input" type="text" placeholder="Credit card number">
                <button type="submit" class="btn">Click to Validate</button>
            </form>
            <div class="result"></div>
        </div>
         `;
    }

    static get selector() {
        return '.card-number-form';
    }

    static get input() {
        return '.card-number-input';
    }

    static get submit() {
        return '.btn';
    }

    bindToDOM() {
        this.parentEl.innerHTML = CardFormWidget.markup;

        this.element = this.parentEl.querySelector(CardFormWidget.selector);
        this.input = this.element.querySelector(CardFormWidget.input);
        this.submit= this.element.querySelector(CardFormWidget.submit);

        this.element.addEventListener('submit', handleFormSubmit.bind(this));
    }
}
