// Defining the timeout for the test
const timeout = process.env.SLOWMO ? 8000 : 5000;
const puppeteer = require('puppeteer');
const myServer = require('../server');

const getText = (page, elementHandle) => {
    return page.evaluate(el => el.innerText, elementHandle);
};

const delay = (time) => {
    return new Promise((resolve) => {
        setTimeout(resolve, time)
    });
};

let page = null;
let browser = null;

// Go to the specified path and wait for the domcontent to load before running the tests
beforeAll(async () => {
    myServer.start();

    // For console outputs, add this param: {dumpio: true}
    browser = await puppeteer.launch();
    page = await browser.newPage();
    await page.goto('http://127.0.0.1:9000/index5.html', { waitUntil: 'networkidle0' });
});

afterAll(async () => {
    await myServer.stop();
});

describe('5. feladat', () => {
    test('Kellene lennie egy getProducts függvénynek!', async () => {
        await page.waitForSelector('#for-test');

        const pageData = await page.evaluate(() => {
            return {
                getProducts: window.getProducts,
            };
        });

        expect(pageData.getProducts).toBeTruthy();
    });
    
    test('A getProducts által visszaadott termékeknek ár szerint rendezve és szűrve kellene lenniük!', async () => {
        await page.waitForSelector('#for-test');

        const pageData = await page.evaluate( async () => {
            const serverData = await window.getProducts(
                'https://nettuts.hu/jms/js4-002/products?limit=100'
            );
            return { serverData };
        });

        expect(pageData.serverData[0].id).toEqual(54);
        expect(pageData.serverData[1].id).toEqual(65);
        expect(pageData.serverData[2].id).toEqual(13);
    });
});
