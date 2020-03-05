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