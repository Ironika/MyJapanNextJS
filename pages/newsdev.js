import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import { getApiDatas, getTags } from '../helpers'
import debounce from "lodash.debounce"
import { CardNewsDev, CardNewsDevSkeleton, SkeletonItem, Tags } from '../components'

const NewsDev = (props) => {
    const pageToDisplay = 6
    const [newsDev, setNewsDev] = useState(props.newsDev || [])
    const [loader, setLoader] = useState(props.newsDev ? false : true)
    const [tags, setTags] = useState(props.newsDev ? getTags(props.newsDev) : [])
    const [hasMore, setHasMore] = useState(true)
    const [displayedNewsDev, setDisplayedNewsDev] = useState((props.newsDev instanceof Array && props.newsDev.slice(0, pageToDisplay)) || [])

    useEffect(() => {
        const fetchDatas = async () => {
            if(!props.newsDev) {
                const _newsDev = await getApiDatas('newsDev')
                setNewsDev(filteredNews(_newsDev))
                setTags(getTags(_newsDev))
                setDisplayedNewsDev(filteredNews(_newsDev).slice(0, pageToDisplay))
            } else {
                setTags(getTags(props.newsDev))
                setDisplayedNewsDev(filteredNews(props.newsDev).slice(0, pageToDisplay))
            }
            setLoader(false)
        }

        fetchDatas()
    }, []);

    useEffect(() => {
        setDisplayedNewsDev(filteredNews(newsDev).slice(0, pageToDisplay))
    }, [tags]);

    const filteredNews = (news) => {
        if(tags.length === 0 || tags[0].active)
            return news

        let _news = []
        for(let tag of tags) {
            if(tag.active)
                _news = [..._news, ...news.filter((item) => item.site === tag.value)]
        }

        _news.sort((a, b) => b.pubDate - a.pubDate)
        return _news
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

    const loadItems = () => {
        let nbToDisplay = displayedNewsDev.length + pageToDisplay
        if(nbToDisplay > newsDev.length) {
            nbToDisplay = newsDev.length
            setHasMore(false)
        }
        setDisplayedNewsDev(filteredNews(newsDev).slice(0, nbToDisplay))
    }

    const fakeArray = Array(6).fill(6)

    return (
        <div className="NewsDev">
            {
                loader ? 
                <>
                    <SkeletonItem className="tag-skeleton" />
                    <div className="card-container">
                        { fakeArray.map((item, index) =>
                            <CardNewsDevSkeleton key={index}/>
                        )}
                    </div>
                </> :
                <>
                    <Tags tags={tags} setActiveTags={(tags) => setTags(tags)} />
                    <div className="card-container">
                        { displayedNewsDev.map((data, i) => 
                            <CardNewsDev key={i} data={data} />
                        )}
                    </div>
                </>
            }
        </div>
    );
}

NewsDev.getInitialProps = async ({req}) => {
    if(req) {
        const newsDev = await getApiDatas('newsDev', 1);
        return { newsDev }
    }
    return {}
}

NewsDev.propTypes = {
    newsDev: PropTypes.array
}

export default NewsDev
