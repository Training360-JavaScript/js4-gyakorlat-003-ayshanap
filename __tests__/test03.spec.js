
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
    await page.goto('http://127.0.0.1:9000/index3.html', { waitUntil: 'networkidle0' });
});

afterAll(async () => {
    await myServer.stop();
});

describe('3. feladat', () => {
    test('Kellene lennie egy getMovies függvénynek!', async () => {
        await page.waitForSelector('#for-test');

        const pageData = await page.evaluate(() => {
            return {
                getMovies: window.getMovies,
            };
        });

        expect(pageData.getMovies).toBeTruthy();
    });

    test('A getMovies függvénynek vissza kellene adnia az adatokat!', async () => {
        await page.waitForSelector('#for-test');

        const pageData = await page.evaluate( async () => {
            const serverData = await window.getMovies('https://nettuts.hu/jms/js4-002/movies?limit=5');
            return { serverData };
        });

        await delay(3000);

        expect(pageData.serverData.length).toEqual(5);
    });
    
});
