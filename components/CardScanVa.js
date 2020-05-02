import React, { useState } from 'react'
import Tilt from 'react-tilt'
import PropTypes from 'prop-types'
import { useUser } from '../hooks'
import { postApiDatas } from '../helpers'

const CardScanVa = (props) => {
    const [isBookmarked, setIsBookmarked] = useState(false)
    const { user } = useUser()

    const handleClick = () => {
        window.open(props.data.link, '_blank')
    }

    const handleClickBookmark = async(e, scan) => {
        e.preventDefault();
        e.stopPropagation();

        const datas = { datas: scan, type: 'scans' }
        await postApiDatas(`bookmarks/${user.id}`, datas)

        setIsBookmarked(!isBookmarked)
    }

    const style = { backgroundImage: 'url(' + props.data.img + ')' }

    return (
        <Tilt className="tilt tilt-va">
            <div className="card-scans-va" style={style} onClick={handleClick}>
                {/* user && <i title="Click to bookmark" className={isBookmarked ? 'fa fa-bookmark' : 'fa fa-bookmark-o'} onClick={(e) => handleClickBookmark(e, props.data)}></i>*/}
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