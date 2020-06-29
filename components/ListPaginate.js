import React, { useState, useEffect } from 'react'
import debounce from "lodash.debounce"
import PropTypes from 'prop-types'
import { getApiDatas } from '../helpers'
import { CardScanVa, CardAnime, CardScansVaSkeleton, CardAnimesSkeleton } from './'
import { useUser } from '../hooks'

const ListPaginate = (props) => {
    const { user } = useUser()
    const callPageBy = 1
    const limit = props.type === 'scansva' ? 500 : 50
    const [currentPage, setCurrentPage] = useState(1)
    const [datas, setDatas] = useState(props.datas || [])
    const [hasMore, setHasMore] = useState(true)
    const [loader, setLoader] = useState(props.datas ? false : true)
    const [loadMore, setLoadMore] = useState(false)
    const [isOpen, setIsOpen] = useState(true)
    const [flag, setFlag] = useState(false)
    const [search, setSearch] = useState('')

    useEffect(() => {
        setLoader(true)
        const fetchDatas = async (uid) => {
            let _datas = props.datas
            if(!props.datas || flag) {
                _datas = await getApiDatas(props.type, currentPage, null, uid, props.onlyBookmark)
                setFlag(false)
            }
            if(_datas.length === 0) {
                const _currentPage = currentPage + callPageBy
                _datas = await getApiDatas(props.type, _currentPage, currentPage, uid, props.onlyBookmark)
                setCurrentPage(_currentPage)
            }
            setDatas(_datas)
            setLoader(false)
        }
        const uid = user ? user.id : null
        fetchDatas(uid)
    }, [user])

    const loadItems = async() => {
        if(datas.length >= limit || (props.type === 'animes' && props.onlyBookmark && currentPage > 2)) {
            setHasMore(false)
        } else {
            setLoadMore(true)
            const _currentPage = currentPage + callPageBy
            const uid = user ? user.id : null
            const _datas = await getApiDatas(props.type, _currentPage, currentPage, uid, props.onlyBookmark)
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

    const handleChangeSearch = (e) => {
        setSearch(e.target.value)
    }

    const handleSubmit = async(e) => {
        e.preventDefault()
        setLoader(true)
        let _datas = []
        if(search) {
            _datas = await getApiDatas('scansva', null, null, null, null, null, search)
            setHasMore(false)
        } else {
            const uid = user ? user.id : null
            _datas = await getApiDatas(props.type, currentPage, null, uid, props.onlyBookmark)
            setHasMore(true)
        }
        setDatas(_datas)
        setLoader(false)
    }

    const fakeArray = Array(props.type === 'scansva' ? 8 : 10).fill(8)

    return (
        <>
            {props.title && <h2><span onClick={handleClickOpen}>{props.title}</span><i onClick={handleClickOpen} className={isOpen ? "fa fa-chevron-down" : "fa fa-chevron-right"}></i></h2>}
            {props.search &&
                <form className="search" onSubmit={handleSubmit}>
                    <input value={search} onChange={handleChangeSearch} placeholder="Search ..."/>
                    <i onClick={handleSubmit} className="fa fa-search"></i>
                </form>
            }
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
    title: PropTypes.string,
    onlyBookmark: PropTypes.bool
}

export default ListPaginate
