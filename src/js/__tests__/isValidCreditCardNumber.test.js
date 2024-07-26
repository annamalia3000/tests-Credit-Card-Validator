import { isValidCreditCardNumber } from '../isValidCreditCardNumber';

test('should return valid value', () => {
    const result = isValidCreditCardNumber('4916206147525891');
    expect(result).toBe(true);
}); 

test('should return valid value', () => {
    const result = isValidCreditCardNumber('4916 2061 4752 5891');
    expect(result).toBe(true);
});

test('should return unvalid value', () => {
    const result = isValidCreditCardNumber('49162061475258919');
    expect(result).toBe(false);
});

test('should return unvalid value', () => {
    const result = isValidCreditCardNumber('card number');
    expect(result).toBe(false);
});