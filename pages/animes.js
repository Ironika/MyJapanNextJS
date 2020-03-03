import React, { useState, useEffect } from 'react';
import { getApiAnimes } from '../helpers/Animes'
import debounce from "lodash.debounce";
import { ParallaxProvider } from 'react-scroll-parallax';
import { ParallaxBanner } from 'react-scroll-parallax';
import Card from '../components/Animes/Card'
import Loader from '../components/Loader/Loader'
import banner from '../public/img/banner.jpg'

const Animes = (props) => {
    const pageToDisplay = 9
    const [animes, setAnimes] = useState(props.animes || [])
    const [displayedAnimes, setDisplayedAnimes] = useState([])
    const [hasMore, setHasMore] = useState(true)
    const [loader, setLoader] = useState(true)
    const [deepLoader, setDeepLoader] = useState(false)

    useEffect(() => {
        window.onscroll = debounce(() => {
            if (!hasMore) return
            let scroll = window.innerHeight + document.documentElement.scrollTop
            if ( scroll === document.documentElement.offsetHeight)
                loadItems()
        }, 100);
    }, [displayedAnimes])

    useEffect(() => {
        const fetchDatas = async () => {
            const _animes = await getApiAnimes()
            setAnimes(_animes)
            setDisplayedAnimes(_animes.slice(0, pageToDisplay))
            setLoader(false)
            if(deepLoader) {
                setDeepLoader(false)
            }
        }
        fetchDatas()
    }, [deepLoader]);

    const loadItems = () => {
        let nbToDisplay = displayedAnimes.length + pageToDisplay
        if(nbToDisplay > animes.length) {
            nbToDisplay = animes.length
            setHasMore(false)
        }
        setDisplayedAnimes(animes.slice(0, nbToDisplay))
    }

    return (
        <div className="Animes">
            <ParallaxProvider>
                <ParallaxBanner className="homescreen banner" layers={[{ image: banner, amount: 0.5 }]} style={{ height: '300px' }}>
                    <h1 className="title">ANIMES</h1>
                </ParallaxBanner>
                {deepLoader && <Loader style={{marginTop: '20px'}} />}
                <div className="card-container">
                    {   loader ? <Loader /> :
                        displayedAnimes.map((item, index) =>
                            <Card key={index} item={item} />
                        )
                    }
                </div>
            </ParallaxProvider>
        </div>
    );
}

Animes.getInitialProps = async ({req}) => {
    if(req) {
        const animes = await getApiAnimes();
        return { animes }
    }
    return {}
}

export default Animes;
