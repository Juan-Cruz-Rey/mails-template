const fs = require('fs');
const path = require('path');
const juice = require('juice');

const TEMPLATES_DIR = path.join(__dirname, 'templates');
const PARTIALS_DIR  = path.join(TEMPLATES_DIR, 'partials');
const DATA_DIR      = path.join(__dirname, 'data');
const DIST_DIR      = path.join(__dirname, 'dist');
const CSS_FILE      = path.join(__dirname, 'styles', 'mail.css');

const base = fs.readFileSync(path.join(TEMPLATES_DIR, 'base.html'), 'utf8');
const css  = fs.readFileSync(CSS_FILE, 'utf8');

if (!fs.existsSync(DIST_DIR)) fs.mkdirSync(DIST_DIR);

const dataFiles = fs.readdirSync(DATA_DIR).filter(f => f.endsWith('.json'));

dataFiles.forEach(file => {
  const data    = JSON.parse(fs.readFileSync(path.join(DATA_DIR, file), 'utf8'));
  const partial = fs.readFileSync(path.join(PARTIALS_DIR, data.partial), 'utf8');

  // Replace all {{key}} placeholders
  let html = base;
  const vars = { ...data, body: partial };
  for (const [key, value] of Object.entries(vars)) {
    html = html.replaceAll(`{{${key}}}`, value ?? '');
  }

  // Remove the <link> tag and inline the CSS instead
  html = html.replace(/<link[^>]+mail\.css[^>]*>/i, '');
  html = juice.inlineContent(html, css);

  fs.writeFileSync(path.join(DIST_DIR, data.output), html, 'utf8');
  console.log(`Built: dist/${data.output}`);
});
