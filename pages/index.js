import React, { useState, useEffect } from 'react'
import Link from 'next/link.js'
import PropTypes from 'prop-types'
import { getApiDatas } from '../helpers'
import { CardNews, Text, CardNewsSkeleton } from '../components'
import { ParallaxBanner } from 'react-scroll-parallax'

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

const List = (props) => {
    const [datas, setDatas] = useState(props.datas || [])
    const [loader, setLoader] = useState(props.datas ? false : true)

    useEffect(() => {
        const fetchDatas = async () => {
            if(!props.datas) {
                let _datas = await getApiDatas('news')
                _datas.length = 4
                setDatas(_datas)
            }
            setLoader(false)
        }
        fetchDatas()
    }, [])

    const fakeArray = Array(4).fill(4)

    return (
        <div className="news">
            <h2>Last News</h2>
            <div className="card-container">
                {loader ? 
                    fakeArray.map((item, index) =>
                        <CardNewsSkeleton key={index}/>
                    ) :
                    datas.length > 0 ?
                    datas.map((item, index) =>
                        <CardNews key={index} data={item} />
                    ) :
                    <div>No News Found</div>
                }
            </div>
            <div className="cta">
                <Link href={'/news'}><a>Voir plus</a></Link>
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
            <List datas={props.news} />
            <ParallaxBanner className="homescreen" layers={layers3} style={style}></ParallaxBanner>
        </div>
    );
}

Index.getInitialProps = async ({ req }) => {
    if (req) {
        const news = await getApiDatas('news');
        news.length = 4
        return { news }
    }
    return {}
}

Index.propTypes = {
    news: PropTypes.array
}

List.propTypes = {
    datas: PropTypes.array
}

export default Index