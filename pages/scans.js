import React, { useState, useEffect } from 'react';
import debounce from "lodash.debounce";
import LazyLoad from 'react-lazyload';
import { ParallaxProvider } from 'react-scroll-parallax';
import { ParallaxBanner } from 'react-scroll-parallax';
import { getApiScans, getApiScansVA } from '../helpers/Scans'
import Loader from '../components/Loader/Loader'
import CardVa from '../components/Scans/CardVa'
import Card from '../components/Scans/Card'
import banner from '../public/img/banner.jpg'

const Scans = (props) => {
    const pageToDisplay = 12
    const [nbToDisplay, setNbToDisplay] = useState(12)
    const [scans, setScans] = useState(props.scans || [])
    const [scansVa, setScansVa] = useState(props.scansVa || [])
    const [displayedScansVa, setDisplayedScansVa] = useState([])
    const [hasMore, setHasMore] = useState(true)
    const [loader, setLoader] = useState(true)
    const [loaderVa, setLoaderVa] = useState(true)
    const [deepLoader, setDeepLoader] = useState(false)

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
            const _scans = await getApiScans()
            setScans(_scans)
            setLoader(false)
        }
        const fetchScansVa = async (flag) => {
            const _scansVa = await getApiScansVA()
            setScansVa(_scansVa)
            setDisplayedScansVa(_scansVa.slice(0, nbToDisplay))
            setLoaderVa(false)
            if (flag) {
                setHasMore(true)
                setDeepLoader(false)
            }
        }

        fetchScans()
        fetchScansVa()

    }, [deepLoader, nbToDisplay]);

    const loadItems = () => {
        let currentNbToDisplay = displayedScansVa.length + pageToDisplay
        if (currentNbToDisplay > scansVa.length) {
            currentNbToDisplay = scansVa.length
            setHasMore(false)
        }
        setNbToDisplay(currentNbToDisplay)
        setDisplayedScansVa(scansVa.slice(0, currentNbToDisplay))
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
                                scans.map((item, index) =>
                                    <LazyLoad key={index} placeholder={<Loader />}>
                                        <Card news={item} />
                                    </LazyLoad>
                                )
                            }
                        </div>
                    </div>
                    <div className="right">
                        {deepLoader && <Loader style={{ marginTop: '20px' }} />}
                        <div className="card-container">
                            {loaderVa ? <Loader /> :
                                displayedScansVa.map((item, index) =>
                                    <LazyLoad key={index} placeholder={<Loader />}>
                                        <CardVa item={item} />
                                    </LazyLoad>
                                )
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
        const scans = await getApiScans();
        const scansVa = await getApiScansVA();
        return {scans, scansVa}
    }
    return {}
}

export default Scans;
