import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { getApiDatas } from '../helpers'
import debounce from "lodash.debounce"
import { CardNews, Tags, CardNewsSkeleton, SkeletonItem } from '../components'

const getTags = (datas) => {
    let _tags = [{ value: 'All', active: true }]
    for(let data of datas) {
        const tag = _tags.find(element => element.value === data.site)
        if(!tag)
            _tags.push({value: data.site, active: false})
    }
    return _tags
}

const News = (props) => {
    const pageToDisplay = 8
    const [news, setNews] = useState(props.news || [])
    const [displayedNews, setDisplayedNews] = useState((props.news instanceof Array && props.news.slice(0, pageToDisplay)) || [])
    const [hasMore, setHasMore] = useState(true)
    const [loader, setLoader] = useState(props.news ? false : true)
    const [tags, setTags] = useState(props.news ? getTags(props.news) : [])

    useEffect(() => {
        const fetchDatas = async () => {
            if(!props.news) {
                const _news = await getApiDatas('news')
                setNews(_news)
                setTags(getTags(_news))
                setDisplayedNews(filteredNews(_news).slice(0, pageToDisplay))
            } else {
                setTags(getTags(props.news))
                setDisplayedNews(filteredNews(props.news).slice(0, pageToDisplay))
            }
            setLoader(false)
        }

        fetchDatas()
    }, []);

    useEffect(() => {
        setDisplayedNews(filteredNews(news).slice(0, pageToDisplay))
    }, [tags]);

    const filteredNews = (news) => {
        if(tags.length === 0 || tags[0].active)
            return news

        let _news = []
        for(let tag of tags) {
            if(tag.active)
                _news = [..._news, ...news.filter((item) => item.site === tag.value)]
        }

        _news.sort((a, b) => b.pubDate - a.pubDate)
        return _news
    }

    if (process.browser) {
        window.onscroll = debounce(() => {
            if (!hasMore) return
            let scroll = window.innerHeight + document.documentElement.scrollTop
            if (scroll === document.documentElement.offsetHeight) {
                loadItems()
            }
        }, 100)
    }

    const loadItems = () => {
        let nbToDisplay = displayedNews.length + pageToDisplay
        if(nbToDisplay > news.length) {
            nbToDisplay = news.length
            setHasMore(false)
        }
        setDisplayedNews(filteredNews(news).slice(0, nbToDisplay))
    }

    const fakeArray = Array(8).fill(8)

    return (
        <div className="News">
            {   loader ? 
                    <>
                        <SkeletonItem className="tag-skeleton" />
                        <div className="card-container">
                            { fakeArray.map((item, index) =>
                                <CardNewsSkeleton key={index}/>
                            )}
                        </div>
                    </> :
                    <>
                        <Tags tags={tags} setActiveTags={(tags) => setTags(tags)} />
                        <div className="card-container">
                            { displayedNews.length > 0 ?
                                displayedNews.map((item, index) =>
                                    <CardNews key={index} data={item} />
                                ) :
                                <div>No Results founds.</div>
                            }
                        </div>
                    </>
            }
        </div>
    );
}

News.getInitialProps = async ({req}) => {
    if(req) {
        const news = await getApiDatas('news')
        return {news}
    }
    return {}
}

News.propTypes = {
    news: PropTypes.array
}

export default News
