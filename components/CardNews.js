import React from 'react'
import LazyLoad from 'react-lazyload'
import PropTypes from 'prop-types'
import Loader from './Loader'

const CardNews = (props) => {
    const pubDate = new Date(props.data.pubDate)
    return (
        <div className="card-news">
            <a href={props.data.link} target="_blank" rel="noopener noreferrer">
                <LazyLoad placeholder={<Loader />}>
                    <img src={props.data.img} alt={props.data.title}/>
                </LazyLoad>
                <div className="card-news-content">
                    <button>{props.data.tag}</button>
                    <span className="date">{pubDate.toLocaleDateString('fr-FR')}</span>
                    <h3>{props.data.title}</h3>
                    <p>{(props.data.desc && props.data.desc.length > 150) ? props.data.desc.substring(0,150) + '...' : props.data.desc}</p>
                </div>
            </a>
        </div>
    )
}

CardNews.propTypes = {
    data: PropTypes.object.isRequired
}

export default CardNews