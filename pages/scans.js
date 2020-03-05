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
    const itemToDisplay = 8
    const callPageBy = 4
    const [currentPage, setCurrentPage] = useState(2)
    const [scans, setScans] = useState(props.scans || [])
    const [scansVa, setScansVa] = useState(props.scansVa || [])
    const [scansWebtoons, setScansWebtoons] = useState(props.scansWebtoons || [])
    const [displayedScansVa, setDisplayedScansVa] = useState((props.scansVa instanceof Array && props.scansVa.slice(0, itemToDisplay)) || [])
    const [hasMore, setHasMore] = useState(true)
    const [loader, setLoader] = useState(props.scans ? false : true)
    const [loaderWebtoons, setLoaderWebtoons] = useState(props.scansWebtoons ? false : true)
    const [loaderVa, setLoaderVa] = useState(props.scansVa ? false : true)
    const [loadMore, setLoadMore] = useState(false)

    if (process.browser) {
        window.onscroll = debounce(() => {
            if (!hasMore) return
            let scroll = window.innerHeight + document.documentElement.scrollTop
            if (scroll === document.documentElement.offsetHeight) {
                loadItems()
            }
        }, 100);
    }

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
            let _scansVa = await getApiDatas('scansva', currentPage)
            setScansVa(_scansVa)
            setDisplayedScansVa(_scansVa.slice(0, itemToDisplay))
            setLoaderVa(false)
        }

        fetchScans()
        fetchScansWebtoons()
        fetchScansVa()
    }, []);

    const loadItems = async() => {
        let _itemToDisplay = displayedScansVa.length + itemToDisplay
        if(_itemToDisplay > scansVa.length) {
            if(scansVa.length >= 100) {
                _itemToDisplay = scansVa.length
                setHasMore(false)
                setDisplayedScansVa(scansVa.slice(0, _itemToDisplay))
            } else {
                setLoadMore(true)
                const _currentPage = currentPage + callPageBy
                const _scansVa = await getApiDatas('scansva', _currentPage, currentPage)
                const newScanVa = [...scansVa, ..._scansVa]
                setScansVa(newScanVa)
                setCurrentPage(_currentPage)
                setDisplayedScansVa(newScanVa.slice(0, _itemToDisplay))
                setLoadMore(false)
            }
        } else 
            setDisplayedScansVa(scansVa.slice(0, _itemToDisplay))
    }

    return (
        <div className="Scans">
            <ParallaxProvider>
                <ParallaxBanner className="homescreen banner" layers={[{ image: banner, amount: 0.5 }]} style={{ height: '300px' }}>
                    <h1 className="title">SCANS</h1>
                </ParallaxBanner>
                <div className="container">
                    <div className="left">
                        <h2>Scantrad</h2>
                        <div className="card-container">
                            {loader ? <Loader /> :
                                scans.length > 0 ?
                                    scans.map((item, index) =>
                                        <Card key={index} news={item} />
                                    ) :
                                    <div>No Results Found</div>
                            }
                        </div>
                    </div>
                    <div className="center">
                        <h2>MangaFox</h2>
                        <div className="card-container">
                            {loaderVa ? <Loader /> :
                                displayedScansVa.length > 0 ?
                                    displayedScansVa.map((item, index) =>
                                        <CardVa key={index} item={item} />
                                    ) :
                                    <div>No Results Found</div>
                            }
                            {loadMore && <Loader />}
                        </div>
                    </div>
                    <div className="right">
                        <h2>Webtoons</h2>
                        <div className="card-container">
                            {loaderWebtoons ? <Loader /> :
                                scansWebtoons.length > 0 ?
                                    scansWebtoons.map((item, index) =>
                                        <Card key={index} news={item} />
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
        const scansVa = await getApiDatas('scansva', 2);
        return {scans, scansWebtoons, scansVa}
    }
    return {}
}

export default Scans;
