import isValidCreditCardNumber from './isValidCreditCardNumber';
import getCardType from './getCardType';

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