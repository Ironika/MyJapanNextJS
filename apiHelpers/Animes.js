const axios = require('axios');
const cheerio = require('cheerio');
const { isInList, makeArrayPage, makeDate } = require('./Shared');
const { ANIME_SAIKOU, UNIVERSANIMEIZ, VOSTFREE } = require('../rss');

async function getAnimes(page, prevPage) {
    const arrayPage = makeArrayPage(page, prevPage)
    const promises = [
        ...arrayPage.map((item) => axios.get(`${VOSTFREE}${item}`)),
        // ...arrayPage.map((item) => axios.get(`${ANIME_SAIKOU}${item}`)),
        // ...arrayPage.map((item) => axios.get(`${UNIVERSANIMEIZ}${item}`))
    ]
    const responseDatas = await Promise.all(promises)
    let animes = []
    for(let i = 0; i < responseDatas.length; i++) {
        // if(i < arrayPage.length)
            animes = [...animes, ...formatJsonVostFree(responseDatas[i])]
        // else if( i >= arrayPage.length && i < (arrayPage.length * 2))
        //     animes = [...animes, ...formatJsonAnimeSaikou(responseDatas[i])]
        // else 
        //     animes = [...animes, ...formatJsonUniversAnimeiz(responseDatas[i])]
    }

    animes.sort((a, b) => new Date(b.pubDate) - new Date(a.pubDate))
    return animes
}

function formatJsonAnimeSaikou(json) {
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
            const item = { title, link, img, pubDate: new Date(date), site: 'Anime Saikou', lang: 'VOSTFR'}
            array = [...array, item]
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
            array = [...array, item]
        }
    }
    return array
}

function formatJsonVostFree(json) {
    let array = []
    const $ = cheerio.load(json.data)
    const items = $('.last-episode')
    for(let i = 0; i < items.length; i++) {
        let title = $('.last-episode .info .title a')[i].children[0].data
        title = title.replace('VOSTFR', '')
        if(isInList(title.toUpperCase(), 'animes')) {
            const episode = $('.last-episode .alt .year b')[i] && $('.last-episode .alt .year b')[i].children[0].data
            const img = $('.last-episode .image img')[i] && 'https://vostfree.com' + $('.last-episode .image img')[i].attribs.src
            const link = $('.last-episode .title a')[i] && $('.last-episode .title a')[i].attribs.href
            const dates = $('.last-episode .additional')[i] && $('.last-episode .additional')[i].children[3].children[2].attribs.href.split('/')
            const date = new Date(dates[3], Number(dates[4]) - 1, dates[5])
            title = episode ? `${title} ${episode}` : title
            const item = { title, link, img, pubDate: date, site: 'VostFree', lang: 'VOSTFR'}
            array = [...array, item]
        }
    }
    return array
}

module.exports = getAnimes;