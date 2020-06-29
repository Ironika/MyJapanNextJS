import axios from 'axios'
import cheerio from 'cheerio'

export default async function SearchScans(search) {
    const json = await axios.get(`https://mangakakalot.com/search/story/${search.replace(/ /g, '_')}`)
    const $ = cheerio.load(json.data)
    const items = $('.panel_story_list .story_item')
    let array = []
    for(let i = 0; i < items.length; i++) {
        const title = ($(items[i]).find('.story_name > a')[0] && $(items[i]).find('.story_name > a')[0].children[0]) ? $(items[i]).find('.story_name > a')[0].children[0].data : ''
        const img = ($(items[i]).find('img')[0] && $(items[i]).find('img')[0].attribs) ? $(items[i]).find('img')[0].attribs.src : ''
        let chapt = ($(items[i]).find('.story_chapter > a')[0] && $(items[i]).find('.story_chapter > a')[0].children[0]) ? $(items[i]).find('.story_chapter > a')[0].children[0].data : ''
        chapt = chapt.substring(chapt.indexOf('Chapter'))
        chapt = chapt.split(':')[0]
        const link = ($(items[i]).find('.story_chapter > a')[0] && $(items[i]).find('.story_chapter > a')[0].attribs) ? $(items[i]).find('.story_chapter > a')[0].attribs.href : ''
        let item = {title, chapt, link, img, site: 'MangaKakalot', lang: 'VA'}
        array = [...array, item]
    }
    return array
}