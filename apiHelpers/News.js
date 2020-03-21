const cheerio = require('cheerio');
const axios = require('axios');
const { ADALA, NAUTIJON, MANGASNEWS, JEUXVIDEO, JOURNAL_DU_GEEK, BEGEEK } = require('../rss');
const { fetchRss } = require('./Shared');

async function getNews() {
    const [
        adalaJson,
        nautijonJson,
        mangasNewsJson,
        jeuxVideoJson,
        journalDuGeekJson,
        begeekJson
    ] = await Promise.all([
        axios.get(ADALA),
        axios.get(NAUTIJON),
        axios.get(MANGASNEWS),
        fetchRss(JEUXVIDEO),
        fetchRss(JOURNAL_DU_GEEK),
        fetchRss(BEGEEK)
    ])

    const adala = formatJsonAdala(adalaJson)
    const nautijon = formatJsonNautijon(nautijonJson)
    const mangasNews = formatJsonMangasNews(mangasNewsJson)
    const jeuxVideo = formatJsonJeuxVideo(jeuxVideoJson)
    const journalDuGeek = formatJsonJournalDuGeek(journalDuGeekJson)
    const begeek = formatJsonBegeek(begeekJson)

    const news = [...adala, ...nautijon, ...mangasNews, ...jeuxVideo, ...journalDuGeek, ...begeek]
    news.sort((a, b) => b.pubDate - a.pubDate)

    return news
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
        array = [...array, item]
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
        const link = $('.une_actu h3 a')[i] && 'https://www.nautiljon.com' + $('.une_actu h3 a')[i].attribs.href
        const item = {title, link, desc, img, tag, site: 'Nautijon', pubDate: date.setMinutes(-i - 2)}
        array = [...array, item]
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
        array = [...array, item]
    }
    return array
}

function formatJsonJeuxVideo(json) {
    let array = []
    const items = json.rss.channel.item
    const date = new Date()
    for(var i = 0; i < items.length; i++) {
        const title = items[i].title['_cdata']
        const link = items[i].link['_text']
        const pubDate = date.setMinutes(-i - 3) //items[i].pubDate['_text']
        const tag = items[i].category['_text'].toUpperCase()
        const desc = items[i].description['_cdata']
        const img = items[i]['media:thumbnail']._attributes.url
        const item = { title, link, pubDate, img, tag, desc, site: 'JeuxVideo.com'}
        array = [...array, item]
    }
    return array
}

function formatJsonJournalDuGeek(json) {
    let array = []
    const items = json.rss.channel.item
    const date = new Date()
    for(var i = 0; i < items.length; i++) {
        const title = items[i].title['_text']
        const link = items[i].link['_text']
        const pubDate = date.setMinutes(-i - 4) //items[i].pubDate['_text']
        const tag = items[i].category[0] ? items[i].category[0]['_cdata'].toUpperCase() : 'JournalDuGeek'.toUpperCase()
        const desc = items[i].description['_cdata']
        const match = items[i]['content:encoded']['_cdata'] && items[i]['content:encoded']['_cdata'].match('src="(https.*(.jpg|.png|.jpeg))')
        const img = match ? match[0].replace('src="', '') : ''
        const item = { title, link, pubDate, img, tag, desc, site: 'JournalDuGeek'}
        array = [...array, item]
    }
    return array
}

function formatJsonBegeek(json) {
    let array = []
    const items = json.rss.channel.item
    const date = new Date()
    for(var i = 0; i < items.length; i++) {
        const title = items[i].title['_text']
        const link = items[i].link['_text']
        const pubDate = date.setMinutes(-i - 5) //items[i].pubDate['_text']
        const tag = items[i].category[1] ? items[i].category[1]['_cdata'].toUpperCase() : 'BeGeek'.toUpperCase()
        const desc = items[i].description['_cdata']
        const img = items[i]['media:content']._attributes.url
        const item = { title, link, pubDate, img, tag, desc, site: 'BeGeek'}
        array = [...array, item]
    }
    return array
}

module.exports = getNews;