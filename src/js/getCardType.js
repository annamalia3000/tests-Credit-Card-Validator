export function getCardType(cardNumber) {
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