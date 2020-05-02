import React, { useState } from 'react'
import Tilt from 'react-tilt'
import PropTypes from 'prop-types'
import { useUser } from '../hooks'
import { postApiDatas, updateApiDatas } from '../helpers'

const CardAnime = (props) => {
    const [isBookmarked, setIsBookmarked] = useState(props.data.isBookmarked ? props.data.isBookmarked : false)
    const { user } = useUser()

    const handleClick = () => {
        window.open(props.data.link, '_blank')
    }

    const handleClickBookmark = async(e, anime) => {
        e.preventDefault();
        e.stopPropagation();

        const datas = { datas: anime, type: 'animes' }

        if(isBookmarked)
            await updateApiDatas(`bookmarks/${user.id}`, datas)
        else
            await postApiDatas(`bookmarks/${user.id}`, datas)

        setIsBookmarked(!isBookmarked)
    }

    const style = { backgroundImage: `url(${props.data.img})` }

    return (
        <Tilt className="tilt-anime">
            <div className="card-anime" style={style} onClick={handleClick}>
                { user && <i title="Click to follow" className={isBookmarked ? 'fa fa-star' : 'fa fa-star-o'} onClick={(e) => handleClickBookmark(e, props.data)}></i>}
                <a href={props.data.link} className="card-anime-content" target="_blank" rel="noopener noreferrer">
                    <h3>{`${props.data.title} ${props.data.episode}`}</h3>
                    <button>{props.data.site}</button>
                </a>
            </div>
        </Tilt>
    )
}

CardAnime.propTypes = {
    data: PropTypes.object.isRequired
}

export default CardAnime;