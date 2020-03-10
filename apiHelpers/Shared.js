const axios = require('axios')
const convert = require('xml-js');
const { scansList, animeList } = require('../mangas');

const fetchRss = async (url) => {
    const response = await axios.get(url)
    const json = JSON.parse(convert.xml2json(response.data, {compact: true, spaces: 4}));
    return json
}

const isInList = (title, type) => {
    let isInList = false
    let list = scansList
    if(type === 'animes')
        list = animeList
    for(let i = 0; i < list.length; i++) {
        if(title.includes(list[i]))
            isInList = true
    }
    return isInList
}

const makeArrayPage = (page, prevPage) => {
    let arrayMap = []
    if(prevPage) {
        for(let i = Number(prevPage) + 1; i <= page; i++) {
            arrayMap.push(i)
        }
    } else {
        for(let i = 1; i <= page; i++) {
            arrayMap.push(i)
        }
    }

    return arrayMap
}

const makeDate = (stringDate) => {
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

module.exports = {
    fetchRss,
    isInList,
    makeArrayPage,
    makeDate
};