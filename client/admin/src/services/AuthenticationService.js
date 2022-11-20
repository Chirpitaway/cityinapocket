import Api from '@/services/Api'

export default {
    login(credentials){
        return Api().post('authenticate', credentials, {'timeout': 10000})
    }
}