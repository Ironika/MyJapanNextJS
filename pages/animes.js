import React, { useState, useEffect } from 'react';
import { getApiDatas } from '../helpers'
import debounce from "lodash.debounce";
import { CardAnime, Loader } from '../components'

const Animes = (props) => {
    const pageToDisplay = 9
    const [animes, setAnimes] = useState(props.animes || [])
    const [displayedAnimes, setDisplayedAnimes] = useState((props.animes instanceof Array && props.animes.slice(0, pageToDisplay)) || [])
    const [hasMore, setHasMore] = useState(true)
    const [loader, setLoader] = useState(props.animes ? false : true)

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
            const _animes = await getApiDatas('animes')
            setAnimes(_animes)
            setDisplayedAnimes(_animes.slice(0, pageToDisplay))
            setLoader(false)
        }
        fetchDatas()
    }, []);

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
            <div className="card-container">
                {   loader ? <Loader /> :
                    displayedAnimes.length > 0 ?
                        displayedAnimes.map((item, index) =>
                            <CardAnime key={index} item={item} />
                        ) :
                        <div>No Results Found</div>
                }
            </div>
        </div>
    );
}

Animes.getInitialProps = async ({req}) => {
    if(req) {
        const animes = await getApiDatas('animes');
        return { animes }
    }
    return {}
}

export default Animes;
