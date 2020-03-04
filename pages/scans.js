import React, { useState, useEffect } from 'react';
import debounce from "lodash.debounce";
import LazyLoad from 'react-lazyload';
import { ParallaxProvider } from 'react-scroll-parallax';
import { ParallaxBanner } from 'react-scroll-parallax';
import { getApiDatas } from '../helpers'
import Loader from '../components/Loader'
import CardVa from '../components/CardScanVa'
import Card from '../components/CardScan'
import banner from '../public/img/banner.jpg'

const Scans = (props) => {
    const pageToDisplay = 12
    const [scans, setScans] = useState(props.scans || [])
    const [scansVa, setScansVa] = useState(props.scansVa || [])
    const [scansWebtoons, setScansWebtoons] = useState(props.scansWebtoons || [])
    const [displayedScansVa, setDisplayedScansVa] = useState((props.scansVa instanceof Array && props.scansVa.slice(0, pageToDisplay)) || [])
    const [hasMore, setHasMore] = useState(true)
    const [loader, setLoader] = useState(props.scans ? false : true)
    const [loaderWebtoons, setLoaderWebtoons] = useState(props.scansWebtoons ? false : true)
    const [loaderVa, setLoaderVa] = useState(props.scansVa ? false : true)

    useEffect(() => {
        window.onscroll = debounce(() => {
            if (!hasMore) return
            let scroll = window.innerHeight + document.documentElement.scrollTop
            if (scroll === document.documentElement.offsetHeight)
                loadItems()
        }, 100);
    }, [displayedScansVa])

    useEffect(() => {
        const fetchScans = async () => {
            const _scans = await getApiDatas('scans')
            setScans(_scans)
            setLoader(false)
        }
        const fetchScansWebtoons = async () => {
            const _scansWebtoons = await getApiDatas('scanswebtoons')
            setScansWebtoons(_scansWebtoons)
            setLoaderWebtoons(false)
        }
        const fetchScansVa = async () => {
            const _scansVa = await getApiDatas('scansva')
            setScansVa(_scansVa)
            setDisplayedScansVa(_scansVa.slice(0, pageToDisplay))
            setLoaderVa(false)
        }

        fetchScans()
        fetchScansWebtoons()
        fetchScansVa()
    }, []);

    const loadItems = () => {
        let nbToDisplay = displayedScansVa.length + pageToDisplay
        if(nbToDisplay > scansVa.length) {
            nbToDisplay = scansVa.length
            setHasMore(false)
        }
        setDisplayedScansVa(scansVa.slice(0, nbToDisplay))
    }

    return (
        <div className="Scans">
            <ParallaxProvider>
                <ParallaxBanner className="homescreen banner" layers={[{ image: banner, amount: 0.5 }]} style={{ height: '300px' }}>
                    <h1 className="title">SCANS</h1>
                </ParallaxBanner>
                <div className="container">
                    <div className="left">
                        <div className="card-container">
                            {loader ? <Loader /> :
                                scans.length > 0 ?
                                    scans.map((item, index) =>
                                        <LazyLoad key={index} placeholder={<Loader />}>
                                            <Card news={item} />
                                        </LazyLoad>
                                    ) :
                                    <div>No Results Found</div>
                            }
                        </div>
                    </div>
                    <div className="center">
                        <div className="card-container">
                            {loaderVa ? <Loader /> :
                                displayedScansVa.length > 0 ?
                                    displayedScansVa.map((item, index) =>
                                        <LazyLoad key={index} placeholder={<Loader />}>
                                            <CardVa item={item} />
                                        </LazyLoad>
                                    ) :
                                    <div>No Results Found</div>
                            }
                        </div>
                    </div>
                    <div className="right">
                        <div className="card-container">
                            {loader ? <Loader /> :
                                scansWebtoons.length > 0 ?
                                    scansWebtoons.map((item, index) =>
                                        <LazyLoad key={index} placeholder={<Loader />}>
                                            <Card news={item} />
                                        </LazyLoad>
                                    ) :
                                    <div>No Results Found</div>
                            }
                        </div>
                    </div>
                </div>
            </ParallaxProvider>
        </div>
    );
}

Scans.getInitialProps = async ({req}) => {
    if(req) {
        const scans = await getApiDatas('scans');
        const scansWebtoons = await getApiDatas('scanswebtoons');
        const scansVa = await getApiDatas('scansva');
        return {scans, scansWebtoons, scansVa}
    }
    return {}
}

export default Scans;
