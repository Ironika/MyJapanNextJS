const axios = require('axios');
const cheerio = require('cheerio');
const { isInList, fetchRss, makeArrayPage } = require('./Shared');
const { SCANTRAD,
        MANGAFOX,
        UNORDINARY,
        TOWER_OF_GOD,
        MAGE_DEMONS_QUEENS
} = require('../rss');

async function getScans() {
    const [
        scantradJson,
        unOrdinaryJson,
        towerOfGodJson,
        mageDemonsQueensJson
    ] = await Promise.all([
        fetchRss(SCANTRAD),
        fetchRss(UNORDINARY),
        fetchRss(TOWER_OF_GOD),
        fetchRss(MAGE_DEMONS_QUEENS),
    ])

    const scantrad = formatJsonScantrad(scantradJson)
    const unOrdinary = formatJsonWebtoons(unOrdinaryJson)
    const towerOfGod = formatJsonWebtoons(towerOfGodJson)
    const mageDemonsQueens = formatJsonWebtoons(mageDemonsQueensJson)

    const scans = [...scantrad, ...unOrdinary, ...towerOfGod, ...mageDemonsQueens]
    scans.sort((a, b) => new Date(b.pubDate) - new Date(a.pubDate))
    return scans
}

async function getScansVA(page, prevPage) {
    const arrayMap = makeArrayPage(page, prevPage)
    const responseDatas = await Promise.all(
        arrayMap.map((item) => axios.get(`${MANGAFOX}${item}.html`))
    )

    let scansVa = []
    for(let i = 0; i < responseDatas.length; i++) {
        scansVa = [...scansVa, ...formatJsonMangaFox(responseDatas[i])]
    }

    scansVa.sort((a, b) => new Date(b.pubDate) - new Date(a.pubDate))
    return scansVa
}

function formatJsonScantrad(json) {
    let array = []
    const items = json.rss.channel.item
    for(var i = 0; i < items.length; i++) {
        if(isInList(items[i].title['_cdata'].toUpperCase(), 'scans')) {
            const title = items[i].title['_cdata'].replace('Scan - ', '').replace('Chapitre ', '')
            const link = items[i].link['_text']
            const pubDate = items[i].pubDate['_text']
            const img = items[i].description['_cdata'].match('src="(https.*.png)')[0].replace('src="', '')
            const item = { title, link, pubDate, img, site: 'Scantrad', lang: 'VF'}
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
            const img = $(items[i]).find('.manga-list-4-cover')[0].attribs.src
            const pubDate = $(items[i]).find('.manga-list-4-item-subtitle span')[0].children[0].data
            const chapt = $(items[i]).find('.manga-list-4-item-part li:first-child a')[0].children[0].data ? $(items[i]).find('.manga-list-4-item-part li:first-child a')[0].children[0].data.replace('Ch.', '') : ''
            let link = $(items[i]).find('.manga-list-4-item-part li:first-child a')[0].attribs.href ? $(items[i]).find('.manga-list-4-item-part li:first-child a')[0].attribs.href : $('.manga-list-4-list > li > a')[i].attribs.href
            title = title + ' ' + chapt
            link = 'http://fanfox.net' + link
            const item = {title, link, pubDate, img, site: 'MangaFox', lang: 'VA'}
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