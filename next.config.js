const withImages = require('next-images')
const withPlugins = require("next-compose-plugins");
const withFonts = require('next-fonts');
require('dotenv').config();

module.exports = withPlugins([withImages, withFonts])
