'use strict';

const { src, series, dest } = require('gulp');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const autoPrefixer = require('autoprefixer');
const cleanCSS = require('gulp-clean-css');
const fs = require('fs');

sass.compiler = require('node-sass');

function buildCss() {
  return src('./src/button.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss([autoPrefixer()]))
    .pipe(cleanCSS())
    .pipe(dest('./dist/'));
}

function importCssInIndexFile(done) {
  const content = fs.readFileSync('./dist/index.js', { encoding: 'utf-8' });
  const cssContent = "import './button.css';\n" + content;
  fs.writeFile('./dist/index.js', cssContent, (err, cb) => {
    if (err) {
      throw err;
    }
    console.log(`update file successful`);
    done();
  });
}

exports.default = series(buildCss, importCssInIndexFile);
