import React from 'react'
import Link from 'next/link.js'
import { Text } from '../components'
import { ParallaxBanner } from 'react-scroll-parallax'

import banner from '../public/img/banner.jpg'
import homescreen from '../public/img/homescreen.jpg'
import homescreen2 from '../public/img/homescreen2.jpg'
import homescreen3 from '../public/img/homescreen3.jpg'

const content1 = () => {
    return (
        <p>
            I will share with you through this site, various news, photos, musics, mangas or animes.
            <br />
            In addition, this site will allow me to experiment some web technologies.
            <br />
            I hope that the experience will please you, and wish you a pleasant visit.
            <br />
            You can <a href="mailto:kevin.hoquet@gmail.com?subject=CONTACT IronikaSpace">contact me</a> if you need.
        </p>
    )
}

const content2 = () => {
    return (
        <p>
            Some pages may be long to load during the visit.
            <br />
            IronikaSpace is a datas scrapper, so it get datas on other websites and lists them, the process can be long.
            <br />
            This website is Serverless and work with a React & NextJs
        </p>
    )
}

export const List = (props) => {
    const news = [
        {title: 'Adala-news', type: 'news'},
        {title: 'Manga-news', type: 'news'},
        {title: 'Nautijon', type: 'news'},
        {title: 'JeuxVideo.com', type: 'news'},
        {title: 'JournalDuGeek', type: 'news'},
        {title: 'BeGeek', type: 'news'},
        {title: 'RedditReact', type: 'dev'},
        {title: 'RedditJs', type: 'dev'},
        {title: 'JsFeeds', type: 'dev'},
        {title: 'SitepointJs', type: 'dev'},
        {title: 'EchoJs', type: 'dev'},
        {title: 'Developpez.com', type: 'dev'},
        {title: 'MangaFox', type: 'scans'},
        {title: 'Scantrad', type: 'scans'},
        {title: 'Webtoons', type: 'scans'},
        {title: 'UniversAnimeiz', type: 'animes'},
        {title: 'AnimeSaikou', type: 'animes'}
    ]

    return (
        <div className="news">
            <h2>Scrapped sites</h2>
            <div className="card-container">
                { news.map((item, index) =>
                    <Link key={index} href={`/${item.type}?tag=${item.title}`}>
                        <a className="card-news-home">
                            <img src={banner} alt={item.title}/>
                            <div className="card-news-home-content">
                                <span>{item.title}</span>
                            </div>
                        </a>
                    </Link>
                )}
            </div>
        </div>
    )
}

const Index = (props) => {
    const layers1 = [{ image: homescreen2, amount: 0.5 }]
    const layers2 = [{ image: homescreen3, amount: 0.5 }]
    const layers3 = [{ image: homescreen, amount: 0.5 }]
    const style = { height: '450px' }

    return (
        <div className="Home">
            <Text
                title={'Welcome on IronikaSpace'}
                content={content1()}
                citationJap={'猿も木から落ちる'}
                citationTrad={'Even the monkey falls from the tree'}
            />
            <ParallaxBanner className="homescreen" layers={layers1} style={style}></ParallaxBanner>
            <Text
                title={'My Bad !'}
                content={content2()}
                citationJap={'堪忍は一生の宝'}
                citationTrad={'Patience is a treasure of life'}
            />
            <ParallaxBanner className="homescreen" layers={layers2} style={style}></ParallaxBanner>
            <List />
            <ParallaxBanner className="homescreen" layers={layers3} style={style}></ParallaxBanner>
        </div>
    );
}

export default Index