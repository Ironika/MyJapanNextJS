import React from 'react'
import PropTypes from 'prop-types'

const Text = (props) => {
    return (
        <div className="text">
            <h2>{props.title}</h2>
            {props.content}
            <blockquote>{props.citationJap} <br/> "{props.citationTrad}"</blockquote>
        </div>
    )
}

Text.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.node.isRequired,
    citationJap: PropTypes.string.isRequired,
    citationTrad: PropTypes.string.isRequired
}


export default Text