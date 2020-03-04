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
        let title = $('.slide-entry > .hidden > span[itemprop="mainEntityOfPage"] > span[itemprop="name"]')[i].children[0].data
        title = title.replace('VOSTFR', '')
        title = title.replace('vostfr', '')
        if(isInList(title.toUpperCase(), 'animes')) {
            let img = $('.slide-entry > .slide-image > img')[i].attribs.src
            let date = $('.slide-entry > .hidden > span[itemprop="datePublished"]')[i].children[0].data
            let link = $('.slide-entry > .slide-image')[i].attribs.href
            let item = {
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
        let title = $('.post > .post-content > h2 > a')[i].children[0].data
        title = title.replace('VOSTFR', '')
        title = title.replace('vostfr', '')
        if(isInList(title.toUpperCase(), 'animes') && !title.includes('VF')) {
            let episode = $('.post > .post-content > p')[i].children[0].data
            let img = $('.post > .post-thumb > a > img')[i].attribs.src
            let link = $('.post > .post-thumb > a')[i].attribs.href
            let date = $('.post > .post-content > .post-meta > .meta-date')[i].children[0].data
            let item = {
                title: title + ' ' + episode.replace('Épisode ', ''),
                link: link,
                pubDate: new Date(accents.remove(date)),
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

module.exports = getAnimes;