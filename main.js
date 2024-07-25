/******/ (() => { // webpackBootstrap
/******/ 	"use strict";

;// CONCATENATED MODULE: ./src/js/isValidCreditCardNumber.js
function isValidCreditCardNumber(cardNumber) {
  const cleanedNumber = cardNumber.replace(/\D/g, '');
  if (!/^\d+$/.test(cleanedNumber)) {
    return false;
  }
  const digits = cleanedNumber.split('').reverse();
  let sum = 0;
  for (let i = 0; i < digits.length; i++) {
    let digit = +digits[i];
    if (i % 2) {
      digit *= 2;
      if (digit > 9) {
        digit -= 9;
      }
    }
    ;
    sum += digit;
  }
  return sum % 10 === 0;
}
;// CONCATENATED MODULE: ./src/js/getCardType.js
function getCardType(cardNumber) {
  const cardNumberCleaned = cardNumber.replace(/\D/g, '');
  if (/^4/.test(cardNumberCleaned)) {
    return 'visa';
  } else if (/^5[1-5]/.test(cardNumberCleaned)) {
    return 'master';
  } else if (/^3[47]/.test(cardNumberCleaned)) {
    return 'amex';
  } else if (/^6(?:011|5)/.test(cardNumberCleaned)) {
    return 'discover';
  } else if (/^35(2[89]|[3-8][0-9])/.test(cardNumberCleaned)) {
    return 'jcb';
  } else if (/^220[0-4]/.test(cardNumberCleaned) || /^2[1-9]/.test(cardNumberCleaned)) {
    return 'mir';
  } else {
    return 'unknown';
  }
}
;// CONCATENATED MODULE: ./src/js/handleFormSubmit.js


function handleFormSubmit(e) {
  e.preventDefault();
  const cardNumber = document.querySelector('.card-number-input').value;
  const resultElement = document.querySelector('.result');
  if (isValidCreditCardNumber(cardNumber)) {
    const cardType = getCardType(cardNumber);
    resultElement.textContent = `Card is valid and this credit card's issuer is ${cardType}`;
    resultElement.className = `result ${cardType}`;
    document.querySelectorAll('.card').forEach(card => {
      card.classList.remove('selected');
    });
    if (cardType !== 'unknown') {
      document.querySelector(`.card.${cardType}`).classList.add('selected');
    }
  } else {
    resultElement.textContent = 'Card is not valid';
  }
}
;// CONCATENATED MODULE: ./src/js/widget.js

class CardFormWidget {
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
    this.submit = this.element.querySelector(CardFormWidget.submit);
    this.element.addEventListener('submit', handleFormSubmit.bind(this));
  }
}
;// CONCATENATED MODULE: ./src/js/app.js


const container = document.querySelector('.container');
const app_form = new CardFormWidget(container);
app_form.bindToDOM();
document.querySelector('.card-number-form').addEventListener('submit', handleFormSubmit);
;// CONCATENATED MODULE: ./src/index.js


/******/ })()
;
//# sourceMappingURL=main.js.map