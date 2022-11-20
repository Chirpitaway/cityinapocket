import Api from '@/services/Api'

export default {
    getAllProviders (query) {
        return Api().get('/providers/', {params: query})
    },
    getProvider (id) {
        return Api().get(`/providers/${id}`)
    },
    addComment (id, comment) {
        return Api().post(`/providers/${id}/comments`, comment)
    }
}