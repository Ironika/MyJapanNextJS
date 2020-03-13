const { DEVELOPPEZ, JSFEEDS, ECHOJS, REDDIT_JS, REDDIT_REACT, SITEPOINT_JS } = require('../rss');
const { fetchRss } = require('./Shared');

async function getNewsDev() {
    const [
        developpezJson,
        jsFeedsJson,
        echoJsJson,
        redditJsJson,
        redditReactJson,
        sitepointJsJson
    ] = await Promise.all([
        fetchRss(DEVELOPPEZ),
        fetchRss(JSFEEDS),
        fetchRss(ECHOJS),
        fetchRss(REDDIT_JS),
        fetchRss(REDDIT_REACT),
        fetchRss(SITEPOINT_JS)
    ])

    const developpez = formatJsonDeveloppez(developpezJson)
    const jsFeeds = formatJsonJsFeeds(jsFeedsJson)
    const echoJs = formatJsonEchoJS(echoJsJson)
    const redditJs = formatJsonRedditJs(redditJsJson)
    const redditReact = formatJsonRedditReact(redditReactJson)
    const sitepointJs = formatJsonSitepointJS(sitepointJsJson)

    const dev = [...developpez, ...jsFeeds, ...echoJs, ...redditJs, ...redditReact, ...sitepointJs]
    dev.sort((a, b) => b.pubDate - a.pubDate)
    return dev
}

function formatJsonDeveloppez(json) {
    let array = []
    const items = json.rss.channel.item
    for(var i = 0; i < items.length; i++) {
        const title = items[i].title['_cdata']
        const link = items[i].link['_text']
        const pubDate = new Date(items[i].pubDate['_text']).getTime()
        const item = { title, link, pubDate, site: 'Developpez.com'}
        array = [...array, item]
    }
    return array
}

function formatJsonJsFeeds(json) {
    let array = []
    const items = json.rss.channel.item
    for(var i = 0; i < items.length; i++) {
        const title = items[i].title['_text']
        const link = items[i].link['_text']
        const pubDate = new Date(items[i].pubDate['_text']).getTime()
        const item = { title, link, pubDate, site: 'JsFeeds'}
        array = [...array, item]
    }
    return array
}

function formatJsonEchoJS(json) {
    let array = []
    const items = json.rss.channel.item
    for(var i = 0; i < items.length; i++) {
        const title = items[i].title['_text']
        const link = items[i].link['_text']
        const pubDate = new Date().setHours(i / -2)
        const item = { title, link, pubDate, site: 'EchoJs'}
        array = [...array, item]
    }
    return array
}

function formatJsonRedditJs(json) {
    let array = []
    const items = json.feed.entry
    for(var i = 0; i < items.length; i++) {
        const title = items[i].title['_text']
        const link = items[i].link['_attributes'].href
        const pubDate = new Date(items[i].updated['_text']).getTime()
        const item = { title, link, pubDate, site: 'RedditJs'}
        array = [...array, item]
    }
    return array
}

function formatJsonRedditReact(json) {
    let array = []
    const items = json.feed.entry
    for(var i = 0; i < items.length; i++) {
        const title = items[i].title['_text']
        const link = items[i].link['_attributes'].href
        const pubDate = new Date(items[i].updated['_text']).getTime()
        const item = { title, link, pubDate, site: 'RedditReact'}
        array = [...array, item]
    }
    return array
}

function formatJsonSitepointJS(json) {
    let array = []
    const items = json.rss.channel.item
    for(var i = 0; i < items.length; i++) {
        const title = items[i].title['_text']
        const link = items[i].link['_text']
        const pubDate = new Date(items[i].pubDate['_text']).getTime()
        const item = { title, link, pubDate, site: 'SitepointJs'}
        array = [...array, item]
    }
    return array
}

module.exports = getNewsDev;