import Axios from 'axios';

export const getApiDatas = async(path) => {
    try {
        const { data } = await Axios.get(`${process.env.api}${path}`)
        return data
    } catch(e) {
        console.log(e)
    }

    return []
}