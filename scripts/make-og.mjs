import puppeteer from 'puppeteer-core';
import { readFile } from 'node:fs/promises';

const CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const logo = await readFile('src/assets/logo.svg', 'utf8');

const html = `<!doctype html><html><head><meta charset="utf-8">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500&display=swap" rel="stylesheet">
<style>
  *{margin:0;box-sizing:border-box}
  body{width:1200px;height:630px;background:#030712;display:flex;flex-direction:column;
    align-items:center;justify-content:center;gap:44px;font-family:Inter,sans-serif;
    overflow:hidden;position:relative}
  .glow{position:absolute;width:1000px;height:520px;top:60px;
    background:radial-gradient(closest-side, rgba(16,185,129,.34), transparent);filter:blur(70px)}
  #stars{position:absolute;inset:0}
  .logo{position:relative;color:#f9fafb}
  .logo svg{width:560px;height:auto;fill:currentColor;display:block}
  .tag{position:relative;font-size:42px;color:#d1d5dc}
</style></head>
<body>
  <div class="glow"></div>
  <div id="stars"></div>
  <div class="logo">${logo}</div>
  <p class="tag">Organize your GitHub stars</p>
  <script>
    var s=document.getElementById('stars');
    for(var i=0;i<90;i++){var d=document.createElement('div');var z=Math.random()*2+1;
      d.style.cssText='position:absolute;border-radius:50%;background:'+(Math.random()<0.06?'#34d399':'#f9fafb')+
      ';opacity:'+(Math.random()*.4+.12)+';width:'+z+'px;height:'+z+'px;left:'+(Math.random()*100)+'%;top:'+(Math.random()*100)+'%';
      s.appendChild(d);}
  </script>
</body></html>`;

const browser = await puppeteer.launch({
  executablePath: CHROME,
  headless: true,
  args: ['--no-sandbox', '--force-color-profile=srgb'],
  defaultViewport: { width: 1200, height: 630, deviceScaleFactor: 1 },
});
try {
  const page = await browser.newPage();
  await page.setContent(html, { waitUntil: 'networkidle0' });
  await page.evaluate(() => document.fonts.ready);
  await new Promise((r) => setTimeout(r, 300));
  await page.screenshot({ path: 'public/og-image.png', clip: { x: 0, y: 0, width: 1200, height: 630 } });
  console.log('wrote public/og-image.png');
} finally {
  await browser.close();
}
