const axios = require('axios');
const accents = require('remove-accents');
const cheerio = require('cheerio');
const { isInList } = require('./Shared');
const { ANIME_SEIKOU, UNIVERSANIMEIZ } = require('../rss');

async function getAnimes() {
    const animeSeikou = await getAnimeSeikou()
    const UniversAnimeiz = await getUniversAnimeiz()

    const animes = [...animeSeikou, ...UniversAnimeiz]
    animes.sort((a, b) => new Date(b.pubDate) - new Date(a.pubDate))

    return animes
}

async function getAnimeSeikou() {
    let datas = []
    for(let i = 1; i <= 2; i++) {
        const json = await axios.get(ANIME_SEIKOU + i + '/')
        const data = formatJsonAnimeSeikou(json)
        datas = [...datas, ...data]
    }
    return datas
}

async function getUniversAnimeiz() {
    let datas = []
    for(let i = 1; i <= 2; i++) {
        const json = await axios.get(UNIVERSANIMEIZ + i + '/')
        const data = formatJsonUniversAnimeiz(json)
        datas = [...datas, ...data]
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
        if(isInList(title.toUpperCase(), 'animes')) {
            const img = $('.slide-entry .slide-image > img')[i].attribs.src
            const date = $('.slide-entry .hidden > span[itemprop="datePublished"]')[i].children[0].data
            const link = $('.slide-entry .slide-image')[i].attribs.href
            const item = {
                title: title,
                link: link,
                pubDate: new Date(date),
                site: 'Anime Seikou',
                img: img,
                lang: 'VOSTFR'
            }
            if(!isInArray(item, array))
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
            const episode = $('.post .post-content p')[i].children[0].data
            const img = $('.post .post-thumb a img')[i].attribs.src
            const link = $('.post .post-thumb a')[i].attribs.href
            const date = $('.post .meta-date')[i].children[0].data
            const item = {
                title: title + ' ' + episode.replace('Épisode ', ''),
                link: link,
                pubDate: makeDate(date),
                site: 'Univers Animeiz',
                img: img,
                lang: 'VOSTFR'
            }
            if(!isInArray(item, array))
                array.push(item)
        }
    }
    return array
}

function isInArray(item, array) {
    let isInArray = false
    for(let anime of array){
        if(anime.title.includes(item.title))
            return isInArray = true
    }
    return isInArray
}

function makeDate(stringDate) {
    const month = {
        'janvier': 00,
        'février': 01,
        'mars': 02,
        'avril': 03,
        'mai': 04,
        'juin': 05,
        'juillet': 06,
        'août': 07,
        'septembre': 08,
        'octobre': 09,
        'novembre': 10,
        'décembre': 11
    }
    const split = stringDate.split(' ')
    const date = new Date(split[2], month[split[1]], split[0])
    return date
}

module.exports = getAnimes;