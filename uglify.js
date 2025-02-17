const uglifycss = require("uglifycss");
const fs = require("fs");

const cssContent = fs.readFileSync('styles.css', 'utf8');
const cssContent = fs.readFileSync('style.css', 'utf8');

const uglifiedCSS = uglifycss.processString(cssContent);

fs.writeFileSync('styles.css', uglifiedCSS, 'utf8');
fs.writeFileSync('style.css', uglifiedCSS, 'utf8');

console.log('CSS obfuscation complete!');
