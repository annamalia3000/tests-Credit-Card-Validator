import getCardType from '../js/getCardType';

describe('getCardType', () => {
    test.each([
        [
            '4794736211237236', 
            'visa'
        ],  
        [
            '4485 3239 8177 7739 251', 
            'visa'
        ],  
        [
            '5386750880543528', 
            'master'
        ], 
        [
            '376290545403944', 
            'amex'
        ],    
        [
            '6011455218707629407', 
            'discover'
        ], 
        [
            '3589069387307699429', 
            'jcb'
        ],   
        [
            '2200200000000000', 
            'mir'
        ],   
        [
            '123456781234567', 
            'unknown'
        ], 
    ])('should return %s for card number %s', (cardNumber, expectedType) => {
        const result = getCardType(cardNumber);
        expect(result).toBe(expectedType);
    });
});
