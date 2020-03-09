import Axios from 'axios';

export const getApiDatas = async(path, page, prevPage) => {
    let url = `${process.env.api}${path}`
    if(page)
        url = `${url}?page=${page}`
    if(prevPage)
        url = `${url}&prevpage=${prevPage}`
    try {
        const { data } = await Axios.get(url)
        return data
    } catch(e) {
        console.log(e)
    }

    return []
}

export const getTags = (datas) => {
    let _tags = [{ value: 'All', active: true }]
    for(let data of datas) {
        const tag = _tags.find(element => element.value === data.site)
        if(!tag)
            _tags.push({value: data.site, active: false})
    }
    return _tags
}