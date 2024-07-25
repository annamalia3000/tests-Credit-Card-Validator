export function isValidCreditCardNumber(cardNumber) {
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
        };

        sum += digit;
    }

    return (sum % 10 === 0);
}