import React from 'react'
import PropTypes from 'prop-types'
import BlockQuote from './Blockquote'

const Text = (props) => {
    return (
        <div className="text">
            <h2>{props.data.title}</h2>
            <p dangerouslySetInnerHTML={{__html: props.data.content}}></p>
            <BlockQuote citationJap={props.data.citationJap} citationTrad={props.data.citationTrad}/>
        </div>
    )
}

Text.propTypes = {
    data: PropTypes.object.isRequired
}

export default Text