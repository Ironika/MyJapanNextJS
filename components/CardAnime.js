import React from 'react'
import Tilt from 'react-tilt'
import PropTypes from 'prop-types'

const CardAnime = (props) => {
    return (
        <Tilt className="tilt-anime">
            <div className="card-anime" style={{ backgroundImage: 'url(' + props.data.img + ')' }} onClick={() => window.open(props.data.link, '_blank')}>
                <a href={props.data.link} className="card-anime-content" target="_blank" rel="noopener noreferrer">
                    <h3>{props.data.title}</h3>
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