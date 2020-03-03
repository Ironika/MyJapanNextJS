import React, { useState, useEffect } from 'react';
import { getApiDatas } from '../helpers'
import debounce from "lodash.debounce";
import { ParallaxProvider } from 'react-scroll-parallax';
import { ParallaxBanner } from 'react-scroll-parallax';
import Card from '../components/CardNews'
import Loader from '../components/Loader'
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
            <ParallaxProvider>
                <ParallaxBanner className="homescreen banner" layers={[{ image: banner, amount: 0.5 }]} style={{ height: '300px' }}>
                    <h1 className="title">NEWS</h1>
                </ParallaxBanner>
                <div className="card-container">
                    {   loader ? <Loader /> :
                        displayedNews.length > 0 ?
                            displayedNews.map((item, index) =>
                                <Card key={index} news={item} />
                            ) :
                            <div>No Results founds.</div>
                    }
                </div>
            </ParallaxProvider>
        </div>
    );
}

News.getInitialProps = async ({req}) => {
    const news = await getApiDatas('news');
    return {news}
}

export default News;
