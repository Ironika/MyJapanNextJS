import React from 'react'
import PropTypes from 'prop-types'

export const Tag = (props) => {
    return (
        <span onClick={props.setActive} className={props.data.active ? 'tag active' : 'tag'}>
            { props.data.value }
        </span>
    )
}

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

    return (
        <div className="tag-container">
            {
                props.tags.map((data, i) =>
                    <Tag key={i} data={data} setActive={() => setActiveTag(data)} />
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
