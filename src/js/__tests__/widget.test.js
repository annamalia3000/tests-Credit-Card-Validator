import { CardFormWidget } from '../widget';
import { handleFormSubmit } from '../handleFormSubmit';

const setup = () => {
    document.body.innerHTML = '<div class="container"></div>';
    const container = document.querySelector('.container');
    const widget = new CardFormWidget(container);
    widget.bindToDOM();
    return { container, 
        widget };
};

test('widget should render', () => {
    const { container } = setup();
    expect(container.innerHTML).toBe(CardFormWidget.markup);
});

describe('handleFormSubmit', () => {
    test.each([
        [
            '4794736211237236', 
            'Visa', 
            'Card is valid and this credit card\'s issuer is Visa'
        ],
        [
            '5386750880543528', 
            'Master', 
            'Card is valid and this credit card\'s issuer is Master'
        ],
        [ 
            '376290545403944', 
            'Amex', 
            'Card is valid and this credit card\'s issuer is Amex'
        ],
        [
            '6011455218707629407', 
            'Discover', 
            'Card is valid and this credit card\'s issuer is Discover'
        ],
        [
            '3589069387307699429', 
            'JCB', 
            'Card is valid and this credit card\'s issuer is JCB'
        ],
        [
            '2200200000000000', 
            'Mir', 
            'Card is valid and this credit card\'s issuer is Mir'
        ],
        [
            '1234567812345678', 
            'unknown', 
            'Card is not valid'
        ]
    ])('should handle card number %s correctly', (cardNumber, expectedType, expectedMessage) => {
        const { container } = setup();
        const form = container.querySelector(CardFormWidget.selector);
        const input = form.querySelector(CardFormWidget.input);
        const resultElement = container.querySelector('.result');

        input.value = cardNumber;

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            handleFormSubmit(e);

            expect(resultElement.textContent).toBe(expectedMessage);
            expect(resultElement.classList.contains(expectedType)).toBe(expectedType !== 'unknown');

            const selectedCard = container.querySelector(`.card.${expectedType}`);
            if (expectedType !== 'unknown') {
                expect(selectedCard.classList.contains('selected')).toBe(true);
            } else {
                expect(container.querySelectorAll('.card.selected').length).toBe(0);
            }
        });

    });
});
