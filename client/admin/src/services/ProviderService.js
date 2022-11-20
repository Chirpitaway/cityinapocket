import Api from '@/services/Api'

export default {
    getAllProviders () {
        return Api().get('/providers/')
    },
    addProvider (provider) {
        return Api().post('/providers', provider)
    },
    getOneProvider (providerId) {
        return Api().get(`/providers/details/${providerId}`)
    },
    editProvider (provider) {
        return Api().put(`/providers/${provider._id}`, provider)
    },
    deleteProvider (providerId) {
        return Api().delete(`/providers/${providerId}`)
    },
    addTicketType (ticketType, providerId) {
        return Api().post(`/providers/${providerId}/ticket-types`, ticketType)
    },
    editTicketType (ticketType, providerId) {
        return Api().put(`/providers/${providerId}/ticket-types/${ticketType._id}`, ticketType)
    },
    deleteTicketType (ticketTypeId, providerId) {
        return Api().delete(`/providers/${providerId}/ticket-types/${ticketTypeId}`)
    }
}