import React from 'react'
import PropTypes from 'prop-types'

const Tags = props => {
    const setActiveTag = (tag) => {
        let _tags = [...props.tags]

        if(tag.value === 'All') {
            for(let item of _tags)
                item.active = false
            _tags[0].active = !_tags[0].active
        } else {
            _tags[0].active = false
            for(let item of _tags) {
                if(item.value === tag.value) {
                    item.active = !item.active
                    break
                }
            }
        }

        const activeTags = _tags.find(element => element.active)
        if(!activeTags)
            _tags[0].active = true

        props.setActiveTags(_tags)
    }

    const handleClickTag = () => {
        setActiveTag(tag)
    }

    return (
        <div className="tag-container">
            {
                props.tags.map((tag, i) =>
                    <span key={i} onClick={handleClickTag} className={tag.active ? 'tag active' : 'tag'}>
                        {tag.value}
                    </span>
                )
            }
        </div>
    )
}

Tags.propTypes = {
    tags: PropTypes.array.isRequired,
    setActiveTags: PropTypes.func.isRequired
}

export default Tags
