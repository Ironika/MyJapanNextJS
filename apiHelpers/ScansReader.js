import axios from 'axios'
import cheerio from 'cheerio'

export default async function getScansReader(link) {
    const json = await axios.get(link)
    const $ = cheerio.load(json.data)
    let container = $('#vungdoc img')
    if(container.length === 0) {
        container = $('.container-chapter-reader img')
    }
    let reader = []
    const items = container
    for(let i = 0; i < items.length; i++) {
        reader = [...reader, items[i].attribs.src]
    }
    let options = []
    const select = $('.navi-change-chapter')[0]
    const opts = $(select).find('option')
    for(let i = 0; i < opts.length; i++) {
        options = [...options, {label: 'Chapter ' + opts[i].attribs['data-c'], value: opts[i].attribs['data-c']}]
    }
    return {options, scans: reader}
}