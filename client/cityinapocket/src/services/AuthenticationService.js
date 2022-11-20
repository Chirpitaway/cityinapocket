import Api from '@/services/Api'

export default {
    login(credentials){
        return Api().post('/users/login', credentials, {'timeout': 10000})
    },
    register(credentials){
        return Api().post('/users/register', credentials, {'timeout': 10000})
    }
}