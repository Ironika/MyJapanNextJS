const axios = require('axios');
const cheerio = require('cheerio');
const { isInList, fetchRss, makeArrayPage } = require('./Shared');
const { SCANTRAD,
        MANGAFOX,
        UNORDINARY,
        TOWER_OF_GOD,
        MAGE_DEMONS_QUEENS,
        GOD_OF_HIGH_SCHOOL,
        HARDCORE_LEVELING
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
    for(let data of responseDatas) {
        datas = [...datas, ...formatJsonMangaFox(data)]
    }

    return datas
}

async function getWebtoons() {
    const responseDatas = await Promise.all([
        fetchRss(UNORDINARY),
        fetchRss(TOWER_OF_GOD),
        fetchRss(MAGE_DEMONS_QUEENS),
        fetchRss(GOD_OF_HIGH_SCHOOL),
        fetchRss(HARDCORE_LEVELING)
    ])

    let datas = []
    for(let data of responseDatas) {
        datas = [...datas, ...formatJsonWebtoons(data)]
    }

    return datas
}

function formatJsonScantrad(json) {
    let array = []
    const items = json.rss.channel.item
    for(var i = 0; i < items.length; i++) {
        if(isInList(items[i].title['_cdata'].toUpperCase(), 'scans')) {
            let title = items[i].title['_cdata'].replace('Scan - ', '')
            title = title.replace('Chapitre ', '')
            const item = {
                title: title,
                link: items[i].link['_text'],
                pubDate: items[i].pubDate['_text'],
                site: 'Scantrad',
                img: items[i].description['_cdata'].match('src="(https.*.png)')[0].replace('src="', ''),
                lang: 'VF'
            }
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
        let title = $('.manga-list-4-list > li > .manga-list-4-item-title > a')[i].children[0].data
        if(isInList(title.toUpperCase(), 'scans')) {
            const img = $('.manga-list-4-list > li > a > img')[i].attribs.alt === title ? $('.manga-list-4-list > li > a > img')[i].attribs.src : $('.manga-list-4-list > li > a > img')[i + 1].attribs.src
            const date = $('.manga-list-4-list > li > .manga-list-4-item-subtitle > span')[i].children[0].data
            const chapt = $('.manga-list-4-list > li > .manga-list-4-item-part > li:first-child > a')[i].children[0].data ? $('.manga-list-4-list > li > .manga-list-4-item-part > li:first-child > a')[i].children[0].data.replace('Ch.', '') : ''
            const link = $('.manga-list-4-list > li > .manga-list-4-item-part > li:first-child > a')[i].attribs.href ? $('.manga-list-4-list > li > .manga-list-4-item-part > li:first-child > a')[i].attribs.href : $('.manga-list-4-list > li > a')[i].attribs.href
            const item = {
                title: title + ' ' + chapt,
                link: 'http://fanfox.net' + link,
                pubDate: date,
                site: 'MangaFox',
                img: img,
                lang: 'VA'
            }
            array.push(item)
        }
    }
    return array
}

function formatJsonWebtoons(json) {
    let array = []
    const items = json.rss.channel.item
    const item = {
        title: json.rss.channel.title['_cdata'] + ' ' + items[0].title['_cdata'],
        link: items[0].link['_text'],
        pubDate: items[0].pubDate['_text'],
        site: 'Webtoons',
        img: json.rss.channel.image.url['_text'],
        lang: 'VA'
    }
    array.push(item)
    return array
}

module.exports = {
    getScans,
    getScansVA,
    getScansWebtoons
};