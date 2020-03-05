import React from 'react'
import PropTypes from 'prop-types'
import { ParallaxBanner } from 'react-scroll-parallax'
import banner from '../public/img/banner.jpg'

const Banner = (props) => {
    return (
        <ParallaxBanner className="homescreen banner" layers={[{ image: banner, amount: 0.5 }]} style={{ height: '300px' }}>
            <h1 className="title">{props.title}</h1>
        </ParallaxBanner>
    )
}

Banner.propTypes = {
    title: PropTypes.string.isRequired
}

export default Banner
