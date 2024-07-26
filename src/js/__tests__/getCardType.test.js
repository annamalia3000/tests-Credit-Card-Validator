import { getCardType } from '../getCardType';

describe('getCardType', () => {
    test.each([
        [
            '4794736211237236', 
            'Visa'
        ],  
        [
            '4485 3239 8177 7739 251', 
            'Visa'
        ],  
        [
            '5386750880543528', 
            'Master'
        ], 
        [
            '376290545403944', 
            'Amex'
        ],    
        [
            '6011455218707629407', 
            'Discover'
        ], 
        [
            '3589069387307699429', 
            'JCB'
        ],   
        [
            '2200200000000000', 
            'Mir'
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
