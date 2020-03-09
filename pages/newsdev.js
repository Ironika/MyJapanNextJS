import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import { getApiDatas } from '../helpers'
import { CardNewsDev, CardNewsDevSkeleton } from '../components'

const NewsDev = (props) => {
    const [newsDev, setNewsDev] = useState(props.newsDev || [])
    const [loader, setLoader] = useState(props.newsDev ? false : true)

    useEffect(() => {
        const fetchDatas = async () => {
            if(!props.newsDev) {
                const _newsDev = await getApiDatas('newsDev')
                setNewsDev(_newsDev)
            }
            setLoader(false)
        }

        fetchDatas()
    }, []);

    const fakeArray = Array(6).fill(6)

    return (
        <div className="NewsDev">
            {
                loader ? 
                <>
                    {/* <SkeletonItem className="tag-skeleton" /> */}
                    <div className="card-container">
                        { fakeArray.map((item, index) =>
                            <CardNewsDevSkeleton key={index}/>
                        )}
                    </div>
                </> :
                <>
                    <div className="card-container">
                        { newsDev.map((data, i) => 
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
