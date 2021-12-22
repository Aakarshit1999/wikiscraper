const puppeteer = require("puppeteer");

const curl = "https://www.wikipedia.org/"


async function run(){

  let browser = await puppeteer.launch({
    headless: false,
    defaultViewport: null,
    args: ['--start-maximized']
  });
  
  let pages = await browser.pages();
  let page = pages[0];
  
  page.goto(curl)
  
  await page.waitForSelector("a#js-link-box-en")
  await page.click("a#js-link-box-en")

  await page.waitForSelector(`a[href="/wiki/Wikipedia:Contents/Portals"]`)
  await page.click(`a[href="/wiki/Wikipedia:Contents/Portals"]`)
  await page.waitForSelector(`a[title="Wikipedia:Contents/A–Z index"]`)
  await page.click(`a[title="Wikipedia:Contents/A–Z index"]`)

  await page.waitForSelector(`a[title="Special:AllPages/A"]`)
  await page.click(`a[title="Special:AllPages/A"]`)

  await page.waitForSelector(`a[title="A"]`)
  await page.click(`a[title="A"]`)
  

  const data = await page.evaluate(() => document.querySelector('*').outerHTML);
  console.log(data)


  



}


run();