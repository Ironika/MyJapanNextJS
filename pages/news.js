import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { getApiDatas } from '../helpers'
import { CardNews, Tags, CardNewsSkeleton, SkeletonItem } from '../components'
import { usePaginate, useTags } from '../hooks'
import { useRouter } from 'next/router'

const News = (props) => {
    const [loader, setLoader] = useState(props.news ? false : true)
    const {tags, setTags, getTags, filteredByTag } = useTags()
    const {displayedDatas, setDisplayedDatas, itemToDisplay, datas, setDatas, hasMore} = usePaginate(8, filteredByTag)
    const {query} = useRouter()

    useEffect(() => {
        const fetchDatas = async () => {
            let _datas = props.news
            if(!_datas)
                _datas = await getApiDatas('news')
            setDatas(_datas)
            setTags(getTags(_datas, query.tag))
            setDisplayedDatas(filteredByTag(_datas).slice(0, itemToDisplay))
            setLoader(false)
        }

        fetchDatas()
    }, []);

    useEffect(() => {
        setDisplayedDatas(filteredByTag(datas).slice(0, itemToDisplay))
    }, [tags]);

    const fakeArray = Array(8).fill(8)

    return (
        <div className="News">
            {   loader ?
                    <>
                        <SkeletonItem className="tag-skeleton" />
                        <div className="card-container">
                            { fakeArray.map((item, index) =>
                                <CardNewsSkeleton key={index}/>
                            )}
                        </div>
                    </> :
                    <>
                        <Tags tags={tags} setActiveTags={(tags) => setTags(tags)} />
                        <div className="card-container">
                            { displayedDatas.length > 0 ?
                                displayedDatas.map((item, index) =>
                                    <CardNews key={index} data={item} />
                                ) :
                                <div>No Results founds.</div>
                            }
                        </div>
                        {hasMore ? <i className="fa fa-angle-double-down scroll-more"></i> : ''}
                    </>
            }
        </div>
    );
}

News.getInitialProps = async ({req}) => {
    if(req) {
        const news = await getApiDatas('news')
        return {news}
    }
    return {}
}

News.propTypes = {
    news: PropTypes.array
}

export default News
