import puppeteer from 'puppeteer-core';

const CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const LOGIN = 'http://localhost:8088/dev-login';
const OUT = 'public/images/screenshot-dashboard.png';

const browser = await puppeteer.launch({
  executablePath: CHROME,
  headless: true,
  args: ['--no-sandbox', '--hide-scrollbars', '--force-color-profile=srgb'],
  defaultViewport: { width: 1512, height: 945, deviceScaleFactor: 2 },
});

try {
  const page = await browser.newPage();
  // The app's appearance defaults to 'system'; emulate dark so it renders (and stays) dark.
  await page.emulateMediaFeatures([{ name: 'prefers-color-scheme', value: 'dark' }]);
  await page.goto(LOGIN, { waitUntil: 'networkidle2', timeout: 60000 });
  await page.evaluate(() => document.documentElement.classList.add('dark'));

  await page
    .waitForFunction(() => document.querySelectorAll('a,button,[role="button"]').length > 8, {
      timeout: 30000,
    })
    .catch(() => {});
  await new Promise((r) => setTimeout(r, 2500));

  console.log(JSON.stringify({ finalUrl: page.url(), title: await page.title() }));
  await page.screenshot({ path: OUT, type: 'png' });
  console.log('saved', OUT);
} finally {
  await browser.close();
}
