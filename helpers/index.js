import Axios from 'axios';

export const getApiDatas = async(path, page, prevPage, uid, onlyBookmark) => {
    let url = `${process.env.api}${path}`
    if(page)
        url = `${url}?page=${page}`
    if(prevPage)
        url = `${url}&prevpage=${prevPage}`
    if(uid)
        url = `${url}&uid=${uid}`
    if(onlyBookmark)
        url = `${url}&onlybookmark=${onlyBookmark}`
    try {
        const { data } = await Axios.get(url)
        return data
    } catch(e) {
        console.log(e)
    }

    return []
}

export const postApiDatas = async(path, datas) => {
    let url = `${process.env.api}${path}`
    try {
        const { data } = await Axios.post(url, datas)
        return data
    } catch(e) {
        console.log(e)
    }
    return []
}

export const putApiDatas = async(path, datas) => {
    let url = `${process.env.api}${path}`
    try {
        const { data } = await Axios.put(url, datas)
        return data
    } catch(e) {
        console.log(e)
    }

    return []
}