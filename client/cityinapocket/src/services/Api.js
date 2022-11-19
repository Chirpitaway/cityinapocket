import axios from 'axios'
export default () =>{
    return axios.create({
        baseURL: `/api/v1/`,
        timeout: 5000,
        headers: {
            'authorization': 'Bearer ' + localStorage.getItem('jwt')
        }
    })
}