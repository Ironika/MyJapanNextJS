import React from 'react'
import PropTypes from 'prop-types'
import loader from '../public/img/loader.gif'

const Loader = (props) => (
    <div className="loader" style={props.style}>
        <img src={loader} alt="loader"/>
    </div>
)

Loader.propTypes = {
    style: PropTypes.object
}

export default Loader