const withImages = require('next-images')
const withPlugins = require("next-compose-plugins");
const withFonts = require('next-fonts');
require('dotenv').config();

module.exports = withPlugins([withImages, withFonts], {
    env: {
        api: ['dev', 'development'].includes(process.env.NODE_ENV)
            ? 'http://localhost:3000/api/'
            : 'https://my-japan-next-js.vercel.app/api/',
        mongo_api_pwd: process.env.mongo_api_pwd,
        mailer_user: process.env.mailer_user,
        mailer_pwd: process.env.mailer_pwd
    }
})
