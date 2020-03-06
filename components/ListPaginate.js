import React, { useState, useEffect } from 'react'
import debounce from "lodash.debounce"
import PropTypes from 'prop-types'
import { getApiDatas } from '../helpers'
import { Loader, CardScanVa, CardAnime } from './'

const ListPaginate = (props) => {
    const itemToDisplay = props.type === 'scansva' ? 8 : 10
    const callPageBy = props.type === 'scansva' ? 4 : 2
    const [currentPage, setCurrentPage] = useState(props.type === 'scansva' ? 2 : 1)
    const [datas, setDatas] = useState(props.datas || [])
    const [displayedDatas, setDisplayedDatas] = useState((props.datas instanceof Array && props.datas.slice(0, itemToDisplay)) || [])
    const [hasMore, setHasMore] = useState(true)
    const [loader, setLoader] = useState(props.datas ? false : true)
    const [loadMore, setLoadMore] = useState(false)
    const [isOpen, setIsOpen] = useState(true)

    useEffect(() => {
        const fetchDatas = async () => {
            if(!props.datas) {
                let _datas = await getApiDatas(props.type, currentPage)
                setDatas(_datas)
                setDisplayedDatas(_datas.slice(0, itemToDisplay))
            } else {
                setDisplayedDatas(props.datas.slice(0, itemToDisplay))
            }
            setLoader(false)
        }
        fetchDatas()
    }, [])

    const loadItems = async() => {
        let _itemToDisplay = displayedDatas.length + itemToDisplay
        if(_itemToDisplay > datas.length) {
            if(datas.length >= 50) {
                _itemToDisplay = datas.length
                setHasMore(false)
                setDisplayedDatas(datas.slice(0, _itemToDisplay))
            } else {
                setLoadMore(true)
                const _currentPage = currentPage + callPageBy
                const _datas = await getApiDatas(props.type, _currentPage, currentPage)
                const newDatas = [...datas, ..._datas]
                setDatas(newDatas)
                setCurrentPage(_currentPage)
                setDisplayedDatas(newDatas.slice(0, _itemToDisplay))
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
        }, 100)
    }

    return (
        <>
            {props.title && <h2 onClick={() => setIsOpen(!isOpen)}>{props.title}<i className={isOpen ? "fa fa-chevron-down" : "fa fa-chevron-right"}></i></h2>}
            <div className={isOpen ? "card-container open" : "card-container"}>
                {loader ? <Loader /> :
                    displayedDatas.length > 0 ?
                        displayedDatas.map((item, index) => {
                            return props.type === 'scansva' ? <CardScanVa key={index} data={item} /> : <CardAnime key={index} data={item} />
                        }) :
                        <div>A Timeout occured, please refresh</div>
                }
                {loadMore && <Loader />}
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
