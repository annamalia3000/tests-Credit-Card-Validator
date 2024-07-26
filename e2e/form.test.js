import puppeteer from 'puppeteer';
import { fork } from 'child_process';

jest.setTimeout(60000); 

describe('Credit Card Validator form', () => {
    let browser = null;
    let page = null;
    const baseUrl = 'http://localhost:9000';

    beforeAll(async () => {
        browser = await puppeteer.launch({
            headless: false, 
            slowMo: 250,
            devtools: true, 
        });

        page = await browser.newPage();
    });

    afterAll(async () => {
        if (browser) {
            await browser.close();
        }
    });

    test('form should show card is valid and issuer for a valid card number', async () => {
        await page.goto(baseUrl);
        await page.waitForSelector('.card-number-form');

        const form = await page.$('.card-number-form');
        const input = await form.$('.card-number-input');
        const submit = await form.$('.btn');

        await input.type('4111111111111111'); 
        await submit.click();

        await page.waitForSelector('.result');
        const resultText = await page.$eval('.result', el => el.textContent);

        expect(resultText).toBe("Card is valid and this credit card's issuer is visa");
    });

    test('form should show card is not valid if number is not valid', async () => {
        await page.goto(baseUrl);
        await page.waitForSelector('.card-number-form');

        const form = await page.$('.card-number-form');
        const input = await form.$('.card-number-input');
        const submit = await form.$('.btn');

        await input.type('1234567890123456'); 
        await submit.click();

        await page.waitForSelector('.result');
        const resultText = await page.$eval('.result', el => el.textContent);

        expect(resultText).toBe('Card is not valid');
    });
});
