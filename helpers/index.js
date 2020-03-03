import Axios from 'axios';
import { API } from '../api'

export const getApiDatas = async(path) => {
    try {
        const {data } = await Axios.get(`${API}${path}`)
        return data
    } catch(e) {
        console.log(e)
    }

    return []
}