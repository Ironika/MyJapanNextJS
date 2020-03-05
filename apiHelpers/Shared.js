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
    for(let item of list) {
        if(title.includes(item))
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

module.exports = {
    fetchRss,
    isInList,
    makeArrayPage
};