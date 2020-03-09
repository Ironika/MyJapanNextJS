import { useState } from 'react'
import debounce from "lodash.debounce"

export const usePaginate = (page, customFilter) => {
    const pageToDisplay = page
    const [hasMore, setHasMore] = useState(true)
    const [datas, setDatas] = useState([])
    const [displayedDatas, setDisplayedDatas] = useState([])

    if (process.browser) {
        window.onscroll = debounce(() => {
            if (!hasMore) return
            let scroll = window.innerHeight + document.documentElement.scrollTop
            if (scroll === document.documentElement.offsetHeight) {
                loadItems()
            }
        }, 100)
    }

    const loadItems = () => {
        let nbToDisplay = displayedDatas.length + pageToDisplay
        if(nbToDisplay > datas.length) {
            nbToDisplay = datas.length
            setHasMore(false)
        }
        if(customFilter)
            setDisplayedDatas(customFilter(datas).slice(0, nbToDisplay))
        else
            setDisplayedDatas(datas.slice(0, nbToDisplay))
    }

    return {
        datas,
        setDatas,
        displayedDatas,
        setDisplayedDatas,
        pageToDisplay
    }
}
