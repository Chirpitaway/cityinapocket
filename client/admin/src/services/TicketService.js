import Api from '@/services/Api'

export default {
    getAllTickets () {
        return Api().get('/tickets/all')
    },
    addNewTicket (ticket) {
        return Api().post('/tickets', ticket)
    },
    deleteTicket (ticketId) {
        return Api().delete(`/tickets/${ticketId}`)
    }
}