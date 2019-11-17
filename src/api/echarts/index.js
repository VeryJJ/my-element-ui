import axios from '../../../../node_modules/axios'

export const getjson = (url) => {
    return axios.get(url)
}

