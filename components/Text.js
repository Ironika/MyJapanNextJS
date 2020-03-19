import React from 'react'
import PropTypes from 'prop-types'

const Text = (props) => {
    return (
        <div className="text">
            <h2>{props.data.title}</h2>
            <p dangerouslySetInnerHTML={{__html: props.data.content}}></p>
            <blockquote>{props.data.citationJap} <br/> "{props.data.citationTrad}"</blockquote>
        </div>
    )
}

Text.propTypes = {
    data: PropTypes.object.isRequired
}


export default Text