const fs = require('fs');
const path = require('path');
const mjml2html = require('mjml');

const TEMPLATES_DIR = path.join(__dirname, 'src', 'templates');
const DIST_DIR      = path.join(__dirname, 'dist');

if (!fs.existsSync(DIST_DIR)) fs.mkdirSync(DIST_DIR);

function buildAll() {
  const files = fs.readdirSync(TEMPLATES_DIR).filter(f => f.endsWith('.mjml'));

  files.forEach(file => {
    const filePath = path.join(TEMPLATES_DIR, file);
    const mjmlSrc  = fs.readFileSync(filePath, 'utf8');

    const { html, errors } = mjml2html(mjmlSrc, { filePath });

    if (errors && errors.length) {
      console.warn(`[${file}] warnings:`);
      errors.forEach(e => console.warn(`  - ${e.formattedMessage || e.message}`));
    }

    const outName = file.replace(/\.mjml$/, '.html');
    fs.writeFileSync(path.join(DIST_DIR, outName), html, 'utf8');
    console.log(`Built: dist/${outName}`);
  });
}

buildAll();

if (process.argv.includes('--watch')) {
  console.log('\nWatching src/ for changes...');
  fs.watch(path.join(__dirname, 'src'), { recursive: true }, (_, file) => {
    if (file && file.endsWith('.mjml')) {
      console.log(`\nChange detected: ${file}`);
      try { buildAll(); } catch (e) { console.error(e.message); }
    }
  });
}
