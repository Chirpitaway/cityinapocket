import Api from '@/services/Api'

export default {
    getCities () {
        return Api().get('/cities')
    },
    getCity (id) {
        return Api().get(`/cities/${id}`)
    },
    addCity (city) {
        return Api().post('/cities', city)
    },
    editCity (city) {
        return Api().put(`/cities/${city.id}`, city)
    },
    deleteCity (id) {
        return Api().delete(`/cities/${id}`)
    }
}