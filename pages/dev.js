import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import { getApiDatas } from '../helpers'
import { CardNewsDev, CardNewsDevSkeleton, SkeletonItem, Tags } from '../components'
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

    const fakeArray = Array(9).fill(9)

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
                        { displayedDatas.length > 0 ?
                            displayedDatas.map((data, i) =>
                                <CardNewsDev key={i} data={data} />
                            ) :
                            <div>No Results founds.</div>
                        }
                    </div>
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
