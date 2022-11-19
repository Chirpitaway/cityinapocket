import Api from '@/services/Api'

export default {
    login(credentials){
        return Api().post('login', credentials, {'timeout': 10000})
    },
    register(credentials){
        return Api().post('register', credentials, {'timeout': 10000})
    }
}