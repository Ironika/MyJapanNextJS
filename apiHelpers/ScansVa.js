import axios from 'axios'
import cheerio from 'cheerio'
import { makeArrayPage } from './Shared'
import { MANGAKAKALOT } from '../rss'

export default async function getScansVA(page, prevPage, bookmarks, onlyBookmark) {
    const arrayMap = makeArrayPage(page, prevPage)
    const responseDatas = await Promise.all(
        // arrayMap.map((item) => axios.get(`${MANGAFOX}${item}.html`)),
        arrayMap.map((item) => axios.get(`${MANGAKAKALOT}${item}`))
    )

    let scansVa = []
    for(let i = 0; i < responseDatas.length; i++) {
        // scansVa = [...scansVa, ...formatJsonMangaFox(responseDatas[i])]
        scansVa = [...scansVa, ...formatJsonMangaKakalot(responseDatas[i], bookmarks, onlyBookmark)]
    }

    // scansVa.sort((a, b) => new Date(b.pubDate) - new Date(a.pubDate))
    return scansVa
}


function formatJsonMangaKakalot(json, bookmarks, onlyBookmark) {
    let array = []
    const $ = cheerio.load(json.data)
    const items = $('.list-truyen-item-wrap')
    for(let i = 0; i < items.length; i++) {
        const title = ($(items[i]).find('h3 > a')[0] && $(items[i]).find('h3 > a')[0].attribs) ? $(items[i]).find('h3 > a')[0].attribs.title : ''
        const img = ($(items[i]).find('img')[0] && $(items[i]).find('img')[0].attribs) ? $(items[i]).find('img')[0].attribs.src : ''
        let chapt = ($(items[i]).find('.list-story-item-wrap-chapter')[0] && $(items[i]).find('.list-story-item-wrap-chapter')[0].children[0]) ? $(items[i]).find('.list-story-item-wrap-chapter')[0].children[0].data : ''
        chapt = chapt.substring(chapt.indexOf('Chapter'))
        chapt = chapt.split(':')[0]
        const link = ($(items[i]).find('.list-story-item-wrap-chapter')[0] && $(items[i]).find('.list-story-item-wrap-chapter')[0].attribs) ? $(items[i]).find('.list-story-item-wrap-chapter')[0].attribs.href : ''
        let item = {title, chapt, link, img, site: 'MangaKakalot', lang: 'VA'}
        if(bookmarks) {
            if(onlyBookmark) {
                if(isInBookmarks(title.toUpperCase(), bookmarks)) {
                    item.isBookmarked = true
                    array = [...array, item]
                }
            } else {
                if(isInBookmarks(title.toUpperCase(), bookmarks, chapt)) {
                    item.isBookmarked = true
                }
                array = [...array, item]
            }
        } else {
            array = [...array, item]
        }
    }
    return array
}

function isInBookmarks(title, bookmarks, chapt) {
    for(let i = 0; i < bookmarks.length; i++)
        if(chapt) {
            if(title.includes(bookmarks[i].title.toUpperCase()) && chapt === bookmarks[i].chapt)
                return true
        } else {
            if(title.includes(bookmarks[i].title.toUpperCase()))
                return true
        }
    return false
}

// function formatJsonMangaFox(json) {
//     let array = []
//     const $ = cheerio.load(json.data)
//     const items = $('.manga-list-4-list > li')
//     for(let i = 0; i < items.length; i++) {
//         let title = $(items[i]).find('.manga-list-4-item-title a')[0].attribs.title
//         if(isInList(title.toUpperCase(), 'scans')) {
//             const img = $(items[i]).find('.manga-list-4-cover')[0] && $(items[i]).find('.manga-list-4-cover')[0].attribs.src
//             const pubDate = $(items[i]).find('.manga-list-4-item-subtitle span')[0] && $(items[i]).find('.manga-list-4-item-subtitle span')[0].children[0].data
//             const chapt = $(items[i]).find('.manga-list-4-item-part li:first-child a')[0] ? $(items[i]).find('.manga-list-4-item-part li:first-child a')[0].children[0].data.replace('Ch.', '') : ''
//             let link = $(items[i]).find('.manga-list-4-item-part li:first-child a')[0] ? $(items[i]).find('.manga-list-4-item-part li:first-child a')[0].attribs.href : $('.manga-list-4-list > li > a')[i].attribs.href
//             title = title + ' ' + chapt
//             link = 'http://fanfox.net' + link
//             const item = {title, link, pubDate, img, site: 'MangaFox', lang: 'VA'}
//             array = [...array, item]
//         }
//     }
//     return array
// }
