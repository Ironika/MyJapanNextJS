import React from 'react'
import PropTypes from 'prop-types'
import banner from '../public/img/banner.jpg'
// import homescreen3 from '../public/img/homescreen3.jpg'
// import homescreen from '../public/img/homescreen.jpg'
// import homescreen2 from '../public/img/homescreen2.jpg'

const Banner = (props) => {
    return (
        <div className="c-glitch banner" style={{backgroundImage: 'url(' + banner + ')'}}>
            <h1 className="title">{props.title}</h1>
            {/*<div className="c-glitch__img" style={{backgroundImage: 'url(' + homescreen2 + ')'}}></div>
            <div className="c-glitch__img" style={{backgroundImage: 'url(' + homescreen3 + ')'}}></div>
            <div className="c-glitch__img" style={{backgroundImage: 'url(' + homescreen + ')'}}></div>
            <div className="c-glitch__img" style={{backgroundImage: 'url(' + homescreen2 + ')'}}></div>
    <div className="c-glitch__img" style={{backgroundImage: 'url(' + banner + ')'}}></div>*/}
        </div>
    )
}

Banner.propTypes = {
    title: PropTypes.string.isRequired
}

export default Banner
