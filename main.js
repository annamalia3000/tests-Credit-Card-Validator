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
;// CONCATENATED MODULE: ./src/js/app.js


document.querySelector('.card-number-form').addEventListener('submit', e => {
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
});
;// CONCATENATED MODULE: ./src/index.js


/******/ })()
;
//# sourceMappingURL=main.js.map