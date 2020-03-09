import React from 'react'
import LazyLoad from 'react-lazyload'
import PropTypes from 'prop-types'
import Loader from './Loader'
import NOT_FOUND from '../public/img/notfound.png'

const CardNews = (props) => {
    const pubDate = new Date(props.data.pubDate)
    const html = (props.data.desc && props.data.desc.length > 150) ? props.data.desc.substring(0,150) + '...' : props.data.desc
    return (
        <div className="card-news">
            <a href={props.data.link} target="_blank" rel="noopener noreferrer">
                <LazyLoad placeholder={<Loader />}>
                    <img src={props.data.img ? props.data.img : NOT_FOUND} alt={props.data.title}/>
                </LazyLoad>
                <div className="card-news-content">
                    <button>{props.data.tag}</button>
                    <span className="date">{pubDate.toLocaleDateString('fr-FR')}</span>
                    <h3>{props.data.title}</h3>
                    <p dangerouslySetInnerHTML={{__html: html.replace(/(<? *script)/gi, 'illegalscript')}} ></p>
                </div>
            </a>
        </div>
    )
}

CardNews.propTypes = {
    data: PropTypes.object.isRequired
}

export default CardNews