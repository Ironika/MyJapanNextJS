import React, { useState, useEffect } from 'react';
import { getApiNews } from '../helpers/News'
import debounce from "lodash.debounce";
import { ParallaxProvider } from 'react-scroll-parallax';
import { ParallaxBanner } from 'react-scroll-parallax';
import Card from '../components/News/Card'
import Loader from '../components/Loader/Loader'
import banner from '../public/img/banner.jpg'

const News = (props) => {
    const pageToDisplay = 12
    const [news, setNews] = useState(props.news || [])
    const [displayedNews, setDisplayedNews] = useState([])
    const [hasMore, setHasMore] = useState(true)
    const [loader, setLoader] = useState(true)

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
            const _news = await getApiNews()
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
            <ParallaxProvider>
                <ParallaxBanner className="homescreen banner" layers={[{ image: banner, amount: 0.5 }]} style={{ height: '300px' }}>
                    <h1 className="title">NEWS</h1>
                </ParallaxBanner>
                <div className="card-container">
                    {   loader ? <Loader /> :
                        displayedNews.map((item, index) =>
                            <Card key={index} news={item} />
                        )
                    }
                </div>
            </ParallaxProvider>
        </div>
    );
}

News.getInitialProps = async ({req}) => {
    if(req) {
        const news = await getApiNews();
        return {news}
    }
    return {}
}

export default News;
