import React, { useState, useEffect } from 'react';
import debounce from "lodash.debounce";
import { getApiDatas } from '../helpers'
import { Loader, CardScanVa, CardScan } from '../components'

const List = (props) => {
    const [loader, setLoader] = useState(props.datas ? false : true)
    const [datas, setDatas] = useState(props.datas || [])

    useEffect(() => {
        const fetchDatas = async () => {
            const _datas = await getApiDatas(props.type)
            setDatas(_datas)
            setLoader(false)
        }
        fetchDatas()
    }, []);

    return (
        <>
            <h2>{props.title}</h2>
            <div className="card-container">
                {loader ? <Loader /> :
                    datas.length > 0 ?
                        datas.map((item, index) =>
                            <CardScan key={index} data={item} />
                        ) :
                        <div>No Scans Found</div>
                }
            </div>
        </>
    )
}

const ListPaginate = (props) => {
    const itemToDisplay = 8
    const callPageBy = 4
    const [currentPage, setCurrentPage] = useState(2)
    const [datas, setDatas] = useState(props.datas || [])
    const [displayedDatas, setDisplayedDatas] = useState((props.datas instanceof Array && props.datas.slice(0, itemToDisplay)) || [])
    const [hasMore, setHasMore] = useState(true)
    const [loader, setLoader] = useState(props.datas ? false : true)
    const [loadMore, setLoadMore] = useState(false)

    useEffect(() => {
        const fetchDatas = async () => {
            let _datas = await getApiDatas('scansva', currentPage)
            setDatas(_datas)
            setDisplayedDatas(_datas.slice(0, itemToDisplay))
            setLoader(false)
        }
        fetchDatas()
    }, []);

    const loadItems = async() => {
        let _itemToDisplay = displayedDatas.length + itemToDisplay
        if(_itemToDisplay > datas.length) {
            if(datas.length >= 100) {
                _itemToDisplay = datas.length
                setHasMore(false)
                setDisplayedDatas(datas.slice(0, _itemToDisplay))
            } else {
                setLoadMore(true)
                const _currentPage = currentPage + callPageBy
                const _datas = await getApiDatas('scansva', _currentPage, currentPage)
                const newScanVa = [...datas, ..._datas]
                setDatas(newScanVa)
                setCurrentPage(_currentPage)
                setDisplayedDatas(newScanVa.slice(0, _itemToDisplay))
                setLoadMore(false)
            }
        } else
            setDisplayedDatas(datas.slice(0, _itemToDisplay))
    }

    if (process.browser) {
        window.onscroll = debounce(() => {
            if (!hasMore) return
            let scroll = window.innerHeight + document.documentElement.scrollTop
            if (scroll === document.documentElement.offsetHeight) {
                loadItems()
            }
        }, 100);
    }

    return (
        <>
            <h2>MangaFox</h2>
            <div className="card-container">
                {loader ? <Loader /> :
                    displayedDatas.length > 0 ?
                        displayedDatas.map((item, index) =>
                            <CardScanVa key={index} item={item} />
                        ) :
                        <div>No Scans Found</div>
                }
                {loadMore && <Loader />}
            </div>
        </>
    )
}


const Scans = (props) => {
    return (
        <div className="Scans">
            <div className="container">
                <div className="left">
                    <List datas={props.scans} title={'Scantrad'} type={'scans'} />
                </div>
                <div className="center">
                    <ListPaginate datas={props.scansVa}/>
                </div>
                <div className="right">
                    <List datas={props.scansWebtoons} title={'Webtoons'} type={'scanswebtoons'} />
                </div>
            </div>
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
