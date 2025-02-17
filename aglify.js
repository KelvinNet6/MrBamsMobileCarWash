const uglifycss = require("uglifycss");
const fs = require("fs");

// Read the content of 'styles.css'
const cssContent1 = fs.readFileSync('styles.css', 'utf8');
// Read the content of 'style.css'
const cssContent2 = fs.readFileSync('style.css', 'utf8');

// Minify both CSS files
const uglifiedCSS1 = uglifycss.processString(cssContent1);
const uglifiedCSS2 = uglifycss.processString(cssContent2);

// Write the minified content back to 'styles.css' and 'style.css'
fs.writeFileSync('styles.css', uglifiedCSS1, 'utf8');
fs.writeFileSync('style.css', uglifiedCSS2, 'utf8');

console.log('CSS obfuscation complete!');
