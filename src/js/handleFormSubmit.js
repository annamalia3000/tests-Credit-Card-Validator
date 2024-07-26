import { isValidCreditCardNumber } from './isValidCreditCardNumber';
import { getCardType } from './getCardType';

export function handleFormSubmit(e) {
    e.preventDefault();

    const cardNumberInput = document.querySelector('.card-number-input');
    const resultElement = document.querySelector('.result');

    const cardNumber = cardNumberInput.value.trim(); 

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
        resultElement.className = 'result invalid';
    }
}
