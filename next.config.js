const withSass = require('@zeit/next-sass')
const withImages = require('next-images')
const withPlugins = require("next-compose-plugins");
const withFonts = require('next-fonts');
require('dotenv').config();

module.exports = withPlugins([withSass, withImages, withFonts], {
    env: {
        api: process.env.NODE_ENV == 'dev' ? 'http://localhost:3000/api/' : 'https://ironikaspace.com/api/',
        mongo_api_pwd: process.env.mongo_api_pwd,
        mailer_user: process.env.mailer_user,
        mailer_pwd: process.env.mailer_pwd
    }
})
