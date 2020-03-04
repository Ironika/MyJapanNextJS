import React, { useState, useEffect } from 'react';
import Link from 'next/link.js';

import { ParallaxProvider } from 'react-scroll-parallax';
import { ParallaxBanner } from 'react-scroll-parallax';
import { getApiDatas } from '../helpers'
import Loader from '../components/Loader'
import Card from '../components/CardNews'
import Text from '../components/Text'

import banner from '../public/img/banner.jpg'
import homescreen from '../public/img/homescreen.jpg'
import homescreen2 from '../public/img/homescreen2.jpg'
import homescreen3 from '../public/img/homescreen3.jpg'

const content1 = () => {
  return(
    <p>
      I will share with you through this site, various news, photos, music, manga or anime.
      <br/>
      In addition, this site will allow me to experiment some web technologies and will serve me as a portfolio for the future.
      <br/>
      I hope that the experience will please you, and wish you a pleasant visit.
    </p>
  )
}

const content2 = () => {
  return (
    <p>
      Some pages may be long to load during the visit & somes images may be ugly.
      <br/>
      IronikaSpace is a datas scrapper, so it get datas on other websites and lists them, the process can be long.
      <br/>
      *if the Dev talk to you, this website is Serverless and work with a React & NextJs
    </p>
  )
}

const Index = (props) => {
    const [news, setNews] = useState(props.news || []);
    const [loader, setLoader] = useState(props.news ? false : true);

    useEffect(() => {
      const fetchDatas = async () => {
        let _news = await getApiDatas('news')
        _news.length = 4
        setNews(_news)
        setLoader(false)
      }

      fetchDatas()
    }, []);

    return (
      <div className="Home">

        <ParallaxProvider>
          <ParallaxBanner className="homescreen banner" layers={[{ image: banner, amount: 0.5 }]} style={{ height: '300px' }}>
            <h1 className="title">HOME</h1>
          </ParallaxBanner>
          <Text
            title={'Welcome on IronikaSpace'}
            content={content1()}
            citationJap={'猿も木から落ちる'}
            citationTrad={'Even the monkey falls from the tree'}
          />
          <ParallaxBanner className="homescreen" layers={[{ image: homescreen2, amount: 0.5 }]} style={{ height: '450px' }}></ParallaxBanner>
          <Text
            title={'My Bad !'}
            content={content2()}
            citationJap={'堪忍は一生の宝'}
            citationTrad={'Patience is a treasure of life'}
          />
          <ParallaxBanner className="homescreen" layers={[{ image: homescreen3, amount: 0.5 }]} style={{ height: '450px' }}></ParallaxBanner>
          <section>
            <div className="news">
              <h2>Last News</h2>
              <div className="card-container">
                {loader ? <Loader /> :
                  news.length > 0 ?
                    news.map((item, index) =>
                      <Card key={index} news={item} />
                    ) :
                    <div>No Results Found</div>
                }
              </div>
              <div className="cta">
                <Link href={'/news'}><a>Voir plus</a></Link>
              </div>
            </div>
            </section>
            <ParallaxBanner className="homescreen" layers={[{ image: homescreen, amount: 0.5 }]} style={{ height: '450px' }}></ParallaxBanner>
        </ParallaxProvider>

      </div>
    );
  }

Index.getInitialProps = async ({req}) => {
    if(req) {
      const news = await getApiDatas('news');
      news.length = 4
      return {news}
    }
    return {}
}

export default Index