import React, { useState } from 'react'
import Tilt from 'react-tilt'
import PropTypes from 'prop-types'
import { useUser } from '../hooks'
import { postApiDatas, putApiDatas } from '../helpers'

const CardScanVa = (props) => {
    const [isBookmarked, setIsBookmarked] = useState(props.data.isBookmarked ? props.data.isBookmarked : false)
    const { user } = useUser()

    const handleClick = () => {
        window.open(props.data.link, '_blank')
    }

    const handleClickBookmark = async(e, scan) => {
        e.preventDefault();
        e.stopPropagation();

        scan.isBookmarked = true
        const datas = { datas: scan, type: 'scans' }

        if(isBookmarked)
            await putApiDatas(`users/${user.id}`, datas)
        else
            await postApiDatas(`users/${user.id}`, datas)

        setIsBookmarked(!isBookmarked)
    }

    const style = { backgroundImage: 'url(' + props.data.img + ')' }

    return (
        <Tilt className={props.isInProfile ? "tilt tilt-va card-profile" : "tilt tilt-va"}>
            <div className="card-scans-va" style={style} onClick={handleClick}>
                {user && <i title="Click to bookmark" className={isBookmarked ? 'fa fa-star' : 'fa fa-star-o'} onClick={(e) => handleClickBookmark(e, props.data)}></i> }
                <a href={props.data.link} className="card-scans-va-content" target="_blank" rel="noopener noreferrer">
                    <p className="date">{props.data.chapt}</p>
                    <h3>{props.data.title}</h3>
                    <button>{props.data.lang}</button>
                </a>
            </div>
        </Tilt>
    )
}

CardScanVa.propTypes = {
    data: PropTypes.object.isRequired
}

export default CardScanVa