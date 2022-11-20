import Api from '@/services/Api'

export default {
    getAllProviders (query) {
        return Api().get('/providers/', {params: query})
    },
}