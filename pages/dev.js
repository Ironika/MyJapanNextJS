import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import { getApiDatas } from '../helpers'
import { CardNewsDev, CardNewsDevSkeleton, SkeletonItem, Tags, Loader } from '../components'
import { usePaginate, useTags } from '../hooks'
import { useRouter } from 'next/router'


const NewsDev = (props) => {
    const [loader, setLoader] = useState(props.newsDev ? false : true)
    const {tags, setTags, getTags, filteredByTag } = useTags()
    const {displayedDatas, setDisplayedDatas, pageToDisplay, datas, setDatas} = usePaginate(9, filteredByTag)
    const {query} = useRouter()

    useEffect(() => {
        const fetchDatas = async () => {
            let _datas = props.newsDev
            if(!_datas)
                _datas = await getApiDatas('dev')
            setDatas(_datas)
            setTags(getTags(_datas, query.tag))
            setDisplayedDatas(filteredByTag(_datas).slice(0, pageToDisplay))
            setLoader(false)
        }

        fetchDatas()
    }, []);

    useEffect(() => {
        setDisplayedDatas(filteredByTag(datas).slice(0, pageToDisplay))
    }, [tags]);

    const fakeArray = Array(4).fill(4)

    return (
        <div className="NewsDev">
            {
                loader ? 
                <>
                    <SkeletonItem className="tag-skeleton" />
                    <section className="timeline" style={{marginTop: '20px'}}>
                        <ul>
                            { fakeArray.map((data, i) =>
                                <CardNewsDevSkeleton key={i}/>
                            )}
                        </ul>
                    </section>
                </> :
                <>
                    <Tags tags={tags} setActiveTags={(tags) => setTags(tags)} />
                    <section className="timeline">
                        <ul>
                            { displayedDatas.map((data, i) =>
                                <CardNewsDev data={data} key={i} />
                            )}
                        </ul>
                    </section>
                </>
            }
        </div>
    );
}

NewsDev.getInitialProps = async ({req}) => {
    if(req) {
        const newsDev = await getApiDatas('dev', 1);
        return { newsDev }
    }
    return {}
}

NewsDev.propTypes = {
    newsDev: PropTypes.array
}

export default NewsDev
