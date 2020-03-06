const cheerio = require('cheerio');
const axios = require('axios');
const { ADALA, NAUTIJON, MANGASNEWS } = require('../rss');

async function getNews() {
    const adala = await getAdalaNews()
    const nautijon = await getNautijonNews()
    const mangasNews = await getMangasNews()

    const news = [...adala, ...nautijon, ...mangasNews]
    news.sort((a, b) => b.pubDate - a.pubDate)

    return news
}

async function getAdalaNews() {
    const json = await axios.get(ADALA)
    const datas = formatJsonAdala(json)
    return datas
}

async function getNautijonNews() {
    const json = await axios.get(NAUTIJON)
    const datas = formatJsonNautijon(json)
    return datas
}

async function getMangasNews() {
    const json = await axios.get(MANGASNEWS)
    const datas = formatJsonMangasNews(json)
    return datas
}

function formatJsonAdala(json) {
    let array = []
    const $ = cheerio.load(json.data)
    const items = $('.post')
    const date = new Date()
    for(let i = 0; i < items.length; i++) {
        const title = $('.post .entry-title a')[i] && $('.post .entry-title a')[i].children[0].data
        const tag = $('.post .entry-category a')[i] && $('.post .entry-category a')[i].children[0].data
        const desc = $('.post .entry-summary p')[i] && $('.post .entry-summary p')[i].children[0].data
        const img = $('.post .attachment-post-thumbnail')[i] && $('.post .attachment-post-thumbnail')[i].attribs.src
        const link = $('.post .thumbnail-link')[i] && $('.post .thumbnail-link')[i].attribs.href
        const item = {title, link, desc, img, tag, site: 'Adala-news', pubDate: date.setMinutes(-i)}
        array.push(item)
    }
    return array
}

function formatJsonNautijon(json) {
    let array = []
    const $ = cheerio.load(json.data)
    const items = $('.une_actu')
    const date = new Date()
    for(let i = 0; i < items.length - 1; i++) {
        const title = $('.une_actu h3 a')[i] && $('.une_actu h3 a')[i].children[0].data
        const tag = $('.une_actu .stats_actu .fright a:last-child')[i] && $('.une_actu .stats_actu .fright a:last-child')[i].children[0].data.toUpperCase()
        const desc = $('.une_actu p')[i] && $('.une_actu p')[i].children[0].data
        const img = $('.une_actu .fleft')[i] && 'https://www.nautiljon.com' + $('.une_actu .fleft')[i].attribs.src.replace('mini', 'medium')
        const link = $('.une_actu h3 a')[i] && $('.une_actu h3 a')[i].attribs.href
        const item = {title, link, desc, img, tag, site: 'Nautijon', pubDate: date.setMinutes(-i - 2)}
        array.push(item)
    }
    return array
}


function formatJsonMangasNews(json) {
    let array = []
    const $ = cheerio.load(json.data)
    const items = $('.actu')
    const date = new Date()
    for(let i = 0; i < items.length - 1; i++) {
        const title = $('.actu .actu-title a')[i] && $('.actu .actu-title a')[i].children[0].data
        const tag = $('.actu .catIcon')[i] && $('.actu .catIcon')[i].children[0].data.toUpperCase()
        const desc = $('.actu .actu-content')[i] && $('.actu .actu-content')[i].children[0].data
        const img = $('.actu .actu-picture')[i] && $('.actu .actu-picture')[i].attribs.src
        const link = $('.actu .actu-title a')[i] && $('.actu .actu-title a')[i].attribs.href
        const item = {title, link, desc, img, tag, site: 'Manga-news', pubDate: date.setMinutes(-i - 1)}
        array.push(item)
    }
    return array
}


module.exports = getNews;