import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { getApiDatas } from '../helpers'
import debounce from "lodash.debounce"
import { CardNews, Loader } from '../components'

const News = (props) => {
    const pageToDisplay = 12
    const [news, setNews] = useState(props.news || [])
    const [displayedNews, setDisplayedNews] = useState((props.news instanceof Array && props.news.slice(0, pageToDisplay)) || [])
    const [hasMore, setHasMore] = useState(true)
    const [loader, setLoader] = useState(props.news ? false : true)

    useEffect(() => {
        window.onscroll = debounce(() => {
            if (!hasMore) return
            let scroll = window.innerHeight + document.documentElement.scrollTop
            if ( scroll === document.documentElement.offsetHeight)
                loadItems()
        }, 100);
    }, [displayedNews])

    useEffect(() => {
        const fetchDatas = async () => {
            const _news = await getApiDatas('news')
            setNews(_news)
            setDisplayedNews(_news.slice(0, pageToDisplay))
            setLoader(false)
        }

        fetchDatas()
    }, []);

    const loadItems = () => {
        let nbToDisplay = displayedNews.length + pageToDisplay
        if(nbToDisplay > news.length) {
            nbToDisplay = news.length
            setHasMore(false)
        }
        setDisplayedNews(news.slice(0, nbToDisplay))
    }

    return (
        <div className="News">
            <div className="card-container">
                {   loader ? <Loader /> :
                    displayedNews.length > 0 ?
                        displayedNews.map((item, index) =>
                            <CardNews key={index} data={item} />
                        ) :
                        <div>No Results founds.</div>
                }
            </div>
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
