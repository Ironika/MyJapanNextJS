import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import { getApiDatas } from '../helpers'

const NewsDev = (props) => {
    const [newsDev, setNewsDev] = useState(props.newsDev || [])

    useEffect(() => {
        const fetchDatas = async () => {
            if(!props.newsDev) {
                const _newsDev = await getApiDatas('newsDev')
                setNewsDev(_newsDev)
            }
            // setLoader(false)
        }

        fetchDatas()
    }, []);

    const handleClick = () => {
        window.open(item.link, '_blank')
    }

    return (
        <div className="NewsDev">
            <div className="card-container">
                { newsDev.map((item, i) => 
                    <div key={i} className="card-news-dev" onClick={handleClick}>
                        {item.title}
                        <br />
                        <br />
                        {item.site}
                    </div>
                )}
            </div>
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
