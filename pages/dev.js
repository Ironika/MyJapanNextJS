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
            window.addEventListener("scroll", callbackFunc);
        }

        fetchDatas()
    }, []);

    useEffect(() => {
        setDisplayedDatas(filteredByTag(datas).slice(0, pageToDisplay))
    }, [tags]);
    
    function isElementInViewport(el) {
        var rect = el.getBoundingClientRect();
        return (
          rect.top >= 0 &&
          rect.left >= 0 &&
          rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
          rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
      }
      
    function callbackFunc() {
        const items = document.querySelectorAll(".timeline li");
        for (var i = 0; i < items.length; i++) {
            if (isElementInViewport(items[i])) {
                if(!items[i].classList.contains("in-view")){
                    items[i].classList.add("in-view");
                }
            } else if(items[i].classList.contains("in-view")) {
                items[i].classList.remove("in-view");
            }
        }
    }

    return (
        <div className="NewsDev">
            {
                loader ? <Loader />:
                <>
                    <Tags tags={tags} setActiveTags={(tags) => setTags(tags)} />
                    <section className="timeline">
                        <ul>
                            { displayedDatas.map((data, i) =>
                                <li key={i} onClick={() => window.open(data.link, '_blank')}>
                                    <div>
                                        <time>{data.site}</time>
                                        <div className="discovery">
                                            <p>{data.title}</p>
                                        </div>
                                    </div>
                                </li>
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
