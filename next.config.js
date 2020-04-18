const withSass = require('@zeit/next-sass')
const withImages = require('next-images')
const withPlugins = require("next-compose-plugins");
const withFonts = require('next-fonts');

module.exports = withPlugins([withSass, withImages, withFonts], {
    env: {
        api: process.env.NODE_ENV == 'dev' ? 'http://localhost:3000/api/' : 'https://ironikaspace.com/api/',
    },
})
