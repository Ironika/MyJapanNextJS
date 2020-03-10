import { useState } from 'react'

export const useTags = () => {
    const [tags, setTags] = useState([])

    const getTags = (datas, currentTag) => {
        let _tags = [{ value: 'All', active: currentTag ? false : true }]
        for(let i = 0; i < datas.length; i++) {
            const tag = _tags.find(element => element.value === datas[i].site)
            if(!tag)
                _tags.push({value: datas[i].site, active: datas[i].site === currentTag ? true : false})
        }
        return _tags
    }

    const filteredByTag = (datas) => {
        if(tags.length === 0 || tags[0].active)
            return datas

        let _datas = []
        for(let i = 0; i < tags.length; i++) {
            if(tags[i].active)
                _datas = [..._datas, ...datas.filter((item) => item.site === tags[i].value)]
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
