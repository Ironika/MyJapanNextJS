import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { getApiDatas } from '../helpers'
import { CardNews, Tags, CardNewsSkeleton, SkeletonItem } from '../components'
import { usePaginate, useTags } from '../hooks'
import { useRouter } from 'next/router'

export const List = (props) => {
    return (
        <>
            <div className={props.loading ? 'card-container mt-20' : 'card-container'}>
                { props.datas.length > 0 ?
                    props.datas.map((data, index) =>
                        props.loading ?
                        <CardNewsSkeleton key={index} /> :
                        <CardNews data={data} key={index} />
                    ) :
                    <div style={{width: '100%', textAlign: 'center'}}>No Results founds</div>
                }
            </div>
            {props.hasMore && props.datas.length > 0 ? <i className="fa fa-angle-double-down scroll-more"></i> : ''}
        </>
    )
}

const News = (props) => {
    const [loader, setLoader] = useState(props.news ? false : true)
    const {tags, setTags, getTags, filteredByTag } = useTags()
    const {displayedDatas, setDisplayedDatas, itemToDisplay, datas, setDatas, hasMore} = usePaginate(8, filteredByTag)
    const router = useRouter()

    useEffect(() => {
        const fetchDatas = async () => {
            let _datas = props.news
            if(!_datas)
                _datas = await getApiDatas('news')
            setDatas(_datas)
            router ? setTags(getTags(_datas, router.query.tag)) : setTags(getTags(_datas))
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
                        <List datas={fakeArray} loading={loader}/>
                    </> :
                    <>
                        <Tags tags={tags} setActiveTags={(tags) => setTags(tags)} />
                        <List datas={displayedDatas} hasMore={hasMore}/>
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
