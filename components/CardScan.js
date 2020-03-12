import React from 'react'
import PropTypes from 'prop-types'

const CardScan = (props) => {
    let pubDate = new Date(props.data.pubDate)
        pubDate = pubDate.toLocaleDateString()

    return (
        <div className="card-scans">
            <a href={props.data.link} target="_blank" rel="noopener noreferrer">
                <div className="card-scans-container">
                    <img src={props.data.img} alt={props.data.title}/>
                </div>
                <div className="card-scans-container-content">
                    <div className="card-scans-container-content-infos">
                        <img src={props.data.img} alt={props.data.title}/>
                        <div>
                            <p className="date">{pubDate}</p>
                            <h3>{props.data.title}</h3>
                            <button>{props.data.lang}</button>
                        </div>
                    </div>
                </div>
            </a>
        </div>
    )
}

CardScan.propTypes = {
    data: PropTypes.object.isRequired
}

export default CardScan