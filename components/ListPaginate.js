import React, { useState, useEffect } from 'react'
import debounce from "lodash.debounce"
import PropTypes from 'prop-types'
import { getApiDatas } from '../helpers'
import { CardScanVa, CardAnime, CardScansVaSkeleton, CardAnimesSkeleton } from './'

const ListPaginate = (props) => {
    const callPageBy = props.type === 'scansva' ? 4 : 2
    const [currentPage, setCurrentPage] = useState(props.type === 'scansva' ? 2 : 1)
    const [datas, setDatas] = useState(props.datas || [])
    const [hasMore, setHasMore] = useState(true)
    const [loader, setLoader] = useState(props.datas ? false : true)
    const [loadMore, setLoadMore] = useState(false)
    const [isOpen, setIsOpen] = useState(true)

    useEffect(() => {
        const fetchDatas = async () => {
            let _datas = props.datas
            if(!props.datas)
                _datas = await getApiDatas(props.type, currentPage)
            if(_datas.length === 0) {
                const _currentPage = currentPage + callPageBy
                _datas = await getApiDatas(props.type, _currentPage, currentPage)
                setCurrentPage(_currentPage)
            }
            setDatas(_datas)
            setLoader(false)
        }
        fetchDatas()
    }, [])

    const loadItems = async() => {
        if(datas.length >= 50) {
            setHasMore(false)
        } else {
            setLoadMore(true)
            const _currentPage = currentPage + callPageBy
            const _datas = await getApiDatas(props.type, _currentPage, currentPage)
            const newDatas = [...datas, ..._datas]
            setDatas(newDatas)
            setCurrentPage(_currentPage)
            setLoadMore(false)
        }
    }

    if (process.browser) {
        window.onscroll = debounce(() => {
            if (!hasMore) return
            let scroll = window.innerHeight + document.documentElement.scrollTop
            if (scroll === document.documentElement.offsetHeight) {
                loadItems()
            }
        }, 100)
    }

    const handleClickOpen = () => {
        setIsOpen(!isOpen)
    }

    const fakeArray = Array(props.type === 'scansva' ? 8 : 10).fill(8)

    return (
        <>
            {props.title && <h2 onClick={handleClickOpen}>{props.title}<i className={isOpen ? "fa fa-chevron-down" : "fa fa-chevron-right"}></i></h2>}
            <div className={isOpen ? "card-container open" : "card-container"}>
                {loader ?
                    fakeArray.map((item, index) =>
                        props.type === 'scansva' ? <CardScansVaSkeleton key={index} /> : <CardAnimesSkeleton key={index} />
                    ) :
                    datas.length > 0 ?
                        datas.map((item, index) => {
                            return props.type === 'scansva' ? <CardScanVa key={index} data={item} /> : <CardAnime key={index} data={item} />
                        }) :
                        <div style={{textAlign: 'center', width: '100%'}}>No results or a timeout occured, please refresh</div>
                }
                {loader ? '' : loadMore ?
                    fakeArray.map((item, index) =>
                        props.type === 'scansva' ? <CardScansVaSkeleton key={index} /> : <CardAnimesSkeleton key={index} />
                    ) :
                    hasMore && datas.length > 0 ? <i className="fa fa-angle-double-down scroll-more"></i> : ''
                }
            </div>
        </>
    )
}

ListPaginate.propTypes = {
    datas: PropTypes.array,
    type: PropTypes.string.isRequired,
    title: PropTypes.string
}

export default ListPaginate
