import { useState } from 'react'

export const useTags = () => {
    const [tags, setTags] = useState([])

    const getTags = (datas, currentTag) => {
        let _tags = [{ value: 'All', active: currentTag ? false : true }]
        for(let data of datas) {
            const tag = _tags.find(element => element.value === data.site)
            if(!tag)
                _tags.push({value: data.site, active: data.site === currentTag ? true : false})
        }
        return _tags
    }

    const filteredByTag = (datas) => {
        if(tags.length === 0 || tags[0].active)
            return datas

        let _datas = []
        for(let tag of tags) {
            if(tag.active)
                _datas = [..._datas, ...datas.filter((item) => item.site === tag.value)]
        }

        _datas.sort((a, b) => b.pubDate - a.pubDate)
        return _datas
    }

    return {
        tags,
        setTags,
        getTags,
        filteredByTag
    }
}
