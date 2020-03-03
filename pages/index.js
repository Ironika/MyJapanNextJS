import React, { useState, useEffect } from 'react';
import Link from 'next/link.js';

import { ParallaxProvider } from 'react-scroll-parallax';
import { ParallaxBanner } from 'react-scroll-parallax';
import { getApiNews } from '../helpers/News'
import LazyLoad from 'react-lazyload';
import Loader from '../components/Loader/Loader'
import Card from '../components/News/Card'
import FlipCard from '../components/Home/FlipCard/FlipCard'
import PresentationVF from '../components/Home/Presentation/PresentationVF'
import PresentationVA from '../components/Home/Presentation/PresentationVA'
import DescriptionVF from '../components/Home/Description/DescriptionVF'
import DescriptionVA from '../components/Home/Description/DescriptionVA'

import banner from '../public/img/banner.jpg'
import homescreen from '../public/img/homescreen.jpg'
import homescreen2 from '../public/img/homescreen2.jpg'
import homescreen3 from '../public/img/homescreen3.jpg'

const Index = (props) => {
    const [news, setNews] = useState(props.news || []);
    const [loader, setLoader] = useState(true);

    useEffect(() => {
      const fetchDatas = async () => {
        let _news = await getApiNews()
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
          <FlipCard front={<PresentationVF />} back={<PresentationVA />} />
          <LazyLoad placeholder={<Loader />}>
            <ParallaxBanner className="homescreen" layers={[{ image: homescreen2, amount: 0.5 }]} style={{ height: '450px' }}></ParallaxBanner>
          </LazyLoad>
          <FlipCard front={<DescriptionVF />} back={<DescriptionVA />} />
          <LazyLoad placeholder={<Loader />}>
            <ParallaxBanner className="homescreen" layers={[{ image: homescreen3, amount: 0.5 }]} style={{ height: '450px' }}></ParallaxBanner>
          </LazyLoad>
          <section>
            <div className="news">
              <h2>Last News</h2>
              <div className="card-container">
                {loader ? <Loader /> :
                  news.map((item, index) =>
                    <Card key={index} news={item} />
                  )
                }
              </div>
              <div className="cta">
                <Link href={'/news'}><a>Voir plus</a></Link>
              </div>
            </div>
            </section>
          <LazyLoad placeholder={<Loader />}>
            <ParallaxBanner className="homescreen" layers={[{ image: homescreen, amount: 0.5 }]} style={{ height: '450px' }}></ParallaxBanner>
          </LazyLoad>
        </ParallaxProvider>

      </div>
    );
  }

Index.getInitialProps = async (context) => {
    if(context.req) {
        const news = getApiNews();
        return {news}
    }
    return {}
}

export default Index;