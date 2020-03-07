const axios = require('axios');
const cheerio = require('cheerio');
const { isInList, makeArrayPage, makeDate } = require('./Shared');
const { ANIME_SEIKOU, UNIVERSANIMEIZ } = require('../rss');

async function getAnimes(page, prevPage) {
    const animeSeikou = await getAnimeSeikou(page, prevPage)
    const universAnimeiz = await getUniversAnimeiz(page, prevPage)

    const animes = [...animeSeikou, ...universAnimeiz]
    animes.sort((a, b) => new Date(b.pubDate) - new Date(a.pubDate))

    return animes
}

async function getAnimeSeikou(page, prevPage) {
    const arrayMap = makeArrayPage(page, prevPage)
    const responseDatas = await Promise.all(
        arrayMap.map((item) => axios.get(`${ANIME_SEIKOU}${item}`))
    )

    let datas = []
    for(let data of responseDatas) {
        datas = [...datas, ...formatJsonAnimeSeikou(data)]
    }

    return datas
}

async function getUniversAnimeiz(page, prevPage) {
    const arrayMap = makeArrayPage(page, prevPage)
    const responseDatas = await Promise.all(
        arrayMap.map((item) => axios.get(`${UNIVERSANIMEIZ}${item}`))
    )

    let datas = []
    for(let data of responseDatas) {
        datas = [...datas, ...formatJsonUniversAnimeiz(data)]
    }

    return datas
}

function formatJsonAnimeSeikou(json) {
    let array = []
    const $ = cheerio.load(json.data)
    const items = $('.slide-entry')
    for(let i = 0; i < items.length; i++) {
        let title = $('.slide-entry .hidden span[itemprop="mainEntityOfPage"] span[itemprop="name"]')[i].children[0].data
        title = title.replace('VOSTFR', '')
        title = title.replace('vostfr', '')
        if(title && isInList(title.toUpperCase(), 'animes')) {
            const img = $('.slide-entry .slide-image  img')[i].attribs.src
            const date = $('.slide-entry .hidden  span[itemprop="datePublished"]')[i].children[0].data
            const link = $('.slide-entry .slide-image')[i].attribs.href
            const item = { title, link, img, pubDate: new Date(date), site: 'Anime Seikou', lang: 'VOSTFR'}
            array.push(item)
        }
    }
    return array
}

function formatJsonUniversAnimeiz(json) {
    let array = []
    const $ = cheerio.load(json.data)
    const items = $('.post')
    for(let i = 0; i < items.length; i++) {
        let title = $('.post .post-content h2 a')[i].children[0].data
        title = title.replace('VOSTFR', '')
        title = title.replace('vostfr', '')
        if(isInList(title.toUpperCase(), 'animes') && !title.includes('VF')) {
            const episode = $('.post .post-content p')[i] && $('.post .post-content p')[i].children[0].data
            const img = $('.post .post-thumb a img')[i] && $('.post .post-thumb a img')[i].attribs.src
            const link = $('.post .post-thumb a')[i] && $('.post .post-thumb a')[i].attribs.href
            const date = $('.post .meta-date')[i] && $('.post .meta-date')[i].children[0].data
            title = episode ? `${title} ${episode.replace('Épisode ', '')}` : title
            const item = { title, link, img, pubDate: makeDate(date), site: 'Univers Animeiz', lang: 'VOSTFR'}
            array.push(item)
        }
    }
    return array
}

module.exports = getAnimes;