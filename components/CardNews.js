import React from 'react'
import LazyLoad from 'react-lazyload'
import PropTypes from 'prop-types'
import Loader from './Loader'
import NOT_FOUND from '../public/img/notfound.png'

const CardNews = (props) => {
    const pubDate = new Date(props.data.pubDate)
    const title = (props.data.title && props.data.title.length > 60) ? props.data.title.substring(0,60) + '...' : props.data.title
    const html = (props.data.desc && props.data.desc.length > 180) ? props.data.desc.substring(0,180) + '...' : props.data.desc
    return (
        <div className="card-news">
            <a href={props.data.link} target="_blank" rel="noopener noreferrer">
                <LazyLoad placeholder={<Loader />}>
                    <img src={props.data.img ? props.data.img : NOT_FOUND} alt={props.data.title}/>
                </LazyLoad>
                <svg className="card__svg" viewBox="0 0 800 500">
                    <path d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400 L 800 500 L 0 500" stroke="transparent"/>
                    <path className="card__line" d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400" stroke="pink" strokeWidth="3" fill="transparent"/>
                </svg>
                {/*<div className="card-news-content">*/}
                <div className="black-box"></div>
                    <button>{props.data.tag}</button>
                    <span className="date">{pubDate.toLocaleDateString('fr-FR')}</span>
                    <h3>{title}</h3>
                    <p dangerouslySetInnerHTML={{__html: html.replace(/(<? *script)/gi, 'illegalscript')}} ></p>
                {/*</div>*/}
            </a>
        </div>
    )
}

CardNews.propTypes = {
    data: PropTypes.object.isRequired
}

export default CardNews