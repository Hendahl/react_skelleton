/*
 *  Hendahl IT
 */

//const faker = require('faker');
const puppeteer = require('puppeteer');

describe('Tabs', () => {
  test('Can click on Tabs', async () => {
    let browser = await puppeteer.launch({
      headless: false,
      devtools: true,
      slowMo: 250
    });
    let page = await browser.newPage();

    page.emulate({
      viewport: {
        width: 500,
        height: 900
      },
      userAgent: ''
    });

    await page.goto('http://localhost:3000/');
    await page.waitForSelector('button');
    await page.click('button');

    const html = await page.$eval('.resultText', e => e.innerHTML);
    expect(html).toBe('Count: 1');

    //browser.close();
  }, 9000000);
});