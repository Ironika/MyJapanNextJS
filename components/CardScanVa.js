import React from 'react'
import Tilt from 'react-tilt'
import PropTypes from 'prop-types'

const CardScanVa = (props) => {
    return (
        <Tilt className="tilt tilt-va">
            <div className="card-scans-va" style={{ backgroundImage: 'url(' + props.data.img + ')' }} onClick={() => window.open(props.data.link, '_blank')}>
                <a href={props.data.link} className="card-scans-va-content" target="_blank" rel="noopener noreferrer">
                    <p className="date">{props.data.pubDate}</p>
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