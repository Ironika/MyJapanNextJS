const axios = require('axios');
const cheerio = require('cheerio');
const { isInList, fetchRss, makeArrayPage } = require('./Shared');
const { SCANTRAD,
        // MANGAFOX,
        MANGAKAKALOT
} = require('../rss');

async function getScans() {
    const scantradJson = await axios.get(SCANTRAD)
    const scans = formatJsonScantrad(scantradJson)

    return scans
}

async function getScansVA(page, prevPage) {
    const arrayMap = makeArrayPage(page, prevPage)
    const responseDatas = await Promise.all(
        // arrayMap.map((item) => axios.get(`${MANGAFOX}${item}.html`)),
        arrayMap.map((item) => axios.get(`${MANGAKAKALOT}${item}`))
    )

    let scansVa = []
    for(let i = 0; i < responseDatas.length; i++) {
        // scansVa = [...scansVa, ...formatJsonMangaFox(responseDatas[i])]
        scansVa = [...scansVa, ...formatJsonMangaKakalot(responseDatas[i])]
    }

    // scansVa.sort((a, b) => new Date(b.pubDate) - new Date(a.pubDate))
    return scansVa
}

function formatJsonScantrad(json) {
    let array = []
    const $ = cheerio.load(json.data)
    const items = $('.h-left > .home-manga')
    for(let i = 0; i < items.length; i++) {
        const title = $(items[i]).find('.hmi-titre')[0] && $(items[i]).find('.hmi-titre')[0].children[0].children[0].data
        if(title && isInList(title.toUpperCase(), 'scans')) {
            const img = $(items[i]).find('.hm-image')[0] && `${SCANTRAD}${$(items[i]).find('.hm-image')[0].children[0].attribs.src}`
            const chapt = $(items[i]).find('.hmit-numero')[0] && $(items[i]).find('.hmit-numero')[0].children[0].data
            const link = $(items[i]).find('.hmi-lien')[0] && `${SCANTRAD}${$(items[i]).find('.hmi-lien')[0].attribs.href}`
            const item = {title, chapt, link, img, site: 'Scantrad', lang: 'VF'}
            array = [...array, item]
        }
    }
    return array
}

function formatJsonMangaFox(json) {
    let array = []
    const $ = cheerio.load(json.data)
    const items = $('.manga-list-4-list > li')
    for(let i = 0; i < items.length; i++) {
        let title = $(items[i]).find('.manga-list-4-item-title a')[0].attribs.title
        if(isInList(title.toUpperCase(), 'scans')) {
            const img = $(items[i]).find('.manga-list-4-cover')[0] && $(items[i]).find('.manga-list-4-cover')[0].attribs.src
            const pubDate = $(items[i]).find('.manga-list-4-item-subtitle span')[0] && $(items[i]).find('.manga-list-4-item-subtitle span')[0].children[0].data
            const chapt = $(items[i]).find('.manga-list-4-item-part li:first-child a')[0] ? $(items[i]).find('.manga-list-4-item-part li:first-child a')[0].children[0].data.replace('Ch.', '') : ''
            let link = $(items[i]).find('.manga-list-4-item-part li:first-child a')[0] ? $(items[i]).find('.manga-list-4-item-part li:first-child a')[0].attribs.href : $('.manga-list-4-list > li > a')[i].attribs.href
            title = title + ' ' + chapt
            link = 'http://fanfox.net' + link
            const item = {title, link, pubDate, img, site: 'MangaFox', lang: 'VA'}
            array = [...array, item]
        }
    }
    return array
}

function formatJsonMangaKakalot(json) {
    let array = []
    const $ = cheerio.load(json.data)
    const items = $('.list-truyen-item-wrap')
    for(let i = 0; i < items.length; i++) {
        const title = $(items[i]).find('h3 > a')[0].attribs.title
        if(isInList(title.toUpperCase(), 'scans')) {
            const img = $(items[i]).find('img')[0] && $(items[i]).find('img')[0].attribs.src
            const chapt = $(items[i]).find('.list-story-item-wrap-chapter')[0] ? $(items[i]).find('.list-story-item-wrap-chapter')[0].children[0].data : ''
            const link = $(items[i]).find('.list-story-item-wrap-chapter')[0] && $(items[i]).find('.list-story-item-wrap-chapter')[0].attribs.href
            const item = {title, chapt, link, img, site: 'MangaKakalot', lang: 'VA'}
            array = [...array, item]
        }
    }
    return array
}

function formatJsonWebtoons(json) {
    let array = []
    const items = json.rss.channel.item
    const title = json.rss.channel.title['_cdata'] + ' ' + items[0].title['_cdata']
    const link = items[0].link['_text']
    const pubDate = items[0].pubDate['_text']
    const img = json.rss.channel.image.url['_text']
    const item = { title, link, pubDate, img, site: 'Webtoons', lang: 'VA'}
    array = [...array, item]
    return array
}

module.exports = {
    getScans,
    getScansVA
};