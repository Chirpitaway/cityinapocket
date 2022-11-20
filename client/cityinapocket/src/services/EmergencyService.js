import Api from '@/services/Api'

export default {
    getAllEmergencies (city) {
        return Api().get('/emergency-services/', {query: {city: city}})
    },
}