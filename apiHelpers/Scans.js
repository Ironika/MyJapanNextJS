const axios = require('axios');
const cheerio = require('cheerio');
const { isInList, fetchRss, makeArrayPage } = require('./Shared');
const { SCANTRAD,
        MANGAFOX,
        UNORDINARY,
        TOWER_OF_GOD,
        MAGE_DEMONS_QUEENS,
        GOD_OF_HIGH_SCHOOL,
        HARDCORE_LEVELING,
        THE_GAMER
} = require('../rss');

async function getScans() {
    const scans = await getScantrad()
    scans.sort((a, b) => new Date(b.pubDate) - new Date(a.pubDate))
    return scans
}

async function getScansVA(page, prevPage) {
    const scansVa = await getMangaFox(page, prevPage)
    scansVa.sort((a, b) => new Date(b.pubDate) - new Date(a.pubDate))
    return scansVa
}

async function getScansWebtoons() {
    const webtoons = await getWebtoons()
    webtoons.sort((a, b) => new Date(b.pubDate) - new Date(a.pubDate))
    return webtoons
}

async function getScantrad() {
    const json = await fetchRss(SCANTRAD)
    const datas = formatJsonScantrad(json)
    return datas
}

async function getMangaFox(page, prevPage) {
    const arrayMap = makeArrayPage(page, prevPage)
    const responseDatas = await Promise.all(
        arrayMap.map((item) => axios.get(`${MANGAFOX}${item}.html`))
    )

    let datas = []
    for(let i = 0; i < responseDatas.length; i++) {
        datas = [...datas, ...formatJsonMangaFox(responseDatas[i])]
    }

    return datas
}

async function getWebtoons() {
    const responseDatas = await Promise.all([
        fetchRss(UNORDINARY),
        fetchRss(TOWER_OF_GOD),
        fetchRss(MAGE_DEMONS_QUEENS),
        fetchRss(GOD_OF_HIGH_SCHOOL),
        fetchRss(HARDCORE_LEVELING),
        fetchRss(THE_GAMER)
    ])

    let datas = []
    for(let i = 0; i < responseDatas.length; i++) {
        datas = [...datas, ...formatJsonWebtoons(responseDatas[i])]
    }

    return datas
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
            array.push(item)
        }
    }
    return array
}

function formatJsonMangaFox(json) {
    let array = []
    const $ = cheerio.load(json.data)
    const items = $('.manga-list-4-list > li')
    for(let i = 0; i < items.length; i++) {
        let title = $('.manga-list-4-list .manga-list-4-item-title a')[i].children[0].data
        if(isInList(title.toUpperCase(), 'scans')) {
            const img = $('.manga-list-4-list .manga-list-4-cover')[i].attribs.src
            const pubDate = $('.manga-list-4-list .manga-list-4-item-subtitle span')[i].children[0].data
            const chapt = $('.manga-list-4-list .manga-list-4-item-part li:first-child a')[i].children[0].data ? $('.manga-list-4-list .manga-list-4-item-part li:first-child a')[i].children[0].data.replace('Ch.', '') : ''
            let link = $('.manga-list-4-list .manga-list-4-item-part li:first-child a')[i].attribs.href ? $('.manga-list-4-list .manga-list-4-item-part li:first-child a')[i].attribs.href : $('.manga-list-4-list > li > a')[i].attribs.href
            title = title + ' ' + chapt
            link = 'http://fanfox.net' + link
            const item = {title, link, pubDate, img, site: 'MangaFox', lang: 'VA'}
            array.push(item)
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
    array.push(item)
    return array
}

module.exports = {
    getScans,
    getScansVA,
    getScansWebtoons
};