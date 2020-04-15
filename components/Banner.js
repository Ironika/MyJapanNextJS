import React from 'react'
import PropTypes from 'prop-types'
import banner from '../public/img/banner.jpg'
import homescreen3 from '../public/img/homescreen3.jpg'

const Banner = (props) => {
    return (
        <div className="c-glitch banner" style={{backgroundImage: 'url(' + banner + ')'}}>
            <h1 className="title">{props.title}</h1>
            <div className="c-glitch__img" style={{backgroundImage: 'url(' + homescreen3 + ')'}}></div>
            <div className="c-glitch__img" style={{backgroundImage: 'url(' + homescreen3 + ')'}}></div>
            <div className="c-glitch__img" style={{backgroundImage: 'url(' + homescreen3 + ')'}}></div>
            <div className="c-glitch__img" style={{backgroundImage: 'url(' + homescreen3 + ')'}}></div>
            <div className="c-glitch__img" style={{backgroundImage: 'url(' + homescreen3 + ')'}}></div>
        </div>
    )
}

Banner.propTypes = {
    title: PropTypes.string.isRequired
}

export default Banner
