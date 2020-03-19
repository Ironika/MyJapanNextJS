import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import { getApiDatas } from '../helpers'
import { CardNewsDev, CardNewsDevSkeleton, SkeletonItem, Tags } from '../components'
import { usePaginate, useTags } from '../hooks'
import { useRouter } from 'next/router'

export const List = (props) => {
    return (
        <section className={props.loading ? 'timelint mt-20' : "timeline"}>
            <ul>
                { props.datas.length > 0 ?
                    props.datas.map((data, index) =>
                        props.loading ?
                        <CardNewsDevSkeleton /> :
                        <CardNewsDev data={data} key={index} />
                    ) :
                    <div style={{width: '100%', textAlign: 'center'}}>No Results founds.</div>
                }
            </ul>
        </section>
    )
}

const NewsDev = (props) => {
    const [loader, setLoader] = useState(props.newsDev ? false : true)
    const {tags, setTags, getTags, filteredByTag } = useTags()
    const {displayedDatas, setDisplayedDatas, itemToDisplay, datas, setDatas} = usePaginate(9, filteredByTag)
    const router = useRouter()

    useEffect(() => {
        const fetchDatas = async () => {
            let _datas = props.newsDev
            if(!_datas)
                _datas = await getApiDatas('dev')
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

    const fakeArray = Array(4).fill(4)

    return (
        <div className="NewsDev">
            {
                loader ?
                <>
                    <SkeletonItem className="tag-skeleton" />
                    <List datas={fakeArray} loading={loader}/>
                </> :
                <>
                    <Tags tags={tags} setActiveTags={(tags) => setTags(tags)} />
                    <List datas={displayedDatas}/>
                </>
            }
        </div>
    );
}

NewsDev.getInitialProps = async ({req}) => {
    if(req) {
        const newsDev = await getApiDatas('dev');
        return { newsDev }
    }
    return {}
}

NewsDev.propTypes = {
    newsDev: PropTypes.array
}

export default NewsDev
