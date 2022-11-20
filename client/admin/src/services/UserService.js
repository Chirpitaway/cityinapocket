import Api from '@/services/Api'

export default {
    getAllUsers () {
        return Api().get('/users')
    },
    registerSpecial (user) {
        return Api().post('/users/registerSpecial', user)
    },
    editUser (user) {
        return Api().put(`/users/edit/${user.id}`, user)
    },
    editOwnUser (user) {
        return Api().put(`/users/edit`, user)
    },
    deleteUser (id) {
        return Api().delete(`/users/delete/${id}`)
    }
}