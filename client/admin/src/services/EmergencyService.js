import Api from '@/services/Api'

export default {
    getAllEmergencyServices () {
        return Api().get('/emergency-services')
    },
    addEmergencyService (emergencyService) {
        return Api().post('/emergency-services', emergencyService)
    },
    editEmergencyService (emergencyService) {
        return Api().put(`/emergency-services/${emergencyService.id}`, emergencyService)
    },
    deleteEmergencyService (id) {
        return Api().delete(`/emergency-services/${id}`)
    }
}