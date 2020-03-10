import React, {useState, useEffect, useRef} from 'react'
import PropTypes from 'prop-types'

const CardNewsDev = (props) => {
    const [isView, setIsView] = useState(false)
    const el = useRef();

    useEffect(() => {
        if(isInViewport(el.current))
            setIsView(true)

        window.addEventListener("scroll", handleScrollView);
    }, []);

    const isInViewport = (el) => {
        var rect = el.getBoundingClientRect();
        return (
          rect.top >= 0 &&
          rect.left >= 0 &&
          rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
          rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
      }
      
    const handleScrollView = () => {
        const currentEl = el.current
        if(!currentEl)
            return

        let _isView = (isView) ? true : false

        if(isInViewport(currentEl) && !_isView)
            _isView = true
        else if(_isView)
            _isView = false
        
        setIsView(_isView)  
    }

    return (
        <li ref={el} className={isView ? 'in-view' : ''} onClick={() => window.open(props.data.link, '_blank')}>
            <div>
                <time>{props.data.site}</time>
                <div className="discovery">
                    <p>{props.data.title}</p>
                </div>
            </div>
        </li>
    )
}

CardNewsDev.propTypes = {
    data: PropTypes.object.isRequired
}

export default CardNewsDev