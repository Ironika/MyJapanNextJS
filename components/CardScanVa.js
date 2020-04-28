import React from 'react'
import Tilt from 'react-tilt'
import PropTypes from 'prop-types'

const CardScanVa = (props) => {
    const handleClick = () => {
        window.open(props.data.link, '_blank')
    }

    const style = { backgroundImage: 'url(' + props.data.img + ')' }

    return (
        <Tilt className="tilt tilt-va">
            <div className="card-scans-va" style={style} onClick={handleClick}>
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