'use strict'
const utils = require('./utils');
const config = require('../config');
const isProduction = process.env.NODE_ENV === 'production';
const sourceMapEnabled = isProduction
  ? config.build.productionSourceMap
  : config.dev.cssSourceMap;
const tailwindcss = require('tailwindcss');

module.exports = {
  loaders: utils.cssLoaders({
    sourceMap: sourceMapEnabled,
    extract: isProduction
  }),
  cssSourceMap: sourceMapEnabled,
  cacheBusting: config.dev.cacheBusting, 
  transformToRequire: {
    video: 'src',
    source: 'src',
    img: 'src',
    image: 'xlink:href'
  },
  postcss: [
    require('tailwindcss')('./tailwind.config.js'),
    require('autoprefixer')
  ],
  extractCSS: true
};
