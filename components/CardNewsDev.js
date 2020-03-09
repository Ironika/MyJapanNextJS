import React from 'react'
import PropTypes from 'prop-types'

const CardNewsDev = (props) => {
    return (
        <div className="card-news-dev" onClick={() => window.open(props.data.link, '_blank')}>
            <p>{props.data.title}</p>
            <button>{props.data.site}</button>
        </div>
    )
}

CardNewsDev.propTypes = {
    data: PropTypes.object.isRequired
}

export default CardNewsDev