const { chromium } = require("playwright");

(async () => {
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();

  await page.goto("https://twitter.com/login");

  await page.fill('input[type="text"]', "MyName");
  await page.fill('input[type="password"]', "qwert");

  page.click('div[data-testid="LoginForm_Login_Button"]');

  await browser.close();
})();
