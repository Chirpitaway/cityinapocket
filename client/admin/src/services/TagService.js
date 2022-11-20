import Api from '@/services/Api'

export default {
    getAllTags () {
        return Api().get('/tags')
    },
    addTag (tag) {
        return Api().post('/tags', tag)
    },
    editTag (tag) {
        return Api().put(`/tags/${tag.id}`, tag)
    },
    deleteTag (id) {
        return Api().delete(`/tags/${id}`)
    }
}