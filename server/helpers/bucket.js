const { Storage } = require('@google-cloud/storage')

let projectId = 'cityinapocket'
let keyFilename = 'cloudkey.json'

const storage = new Storage({
    projectId,
    keyFilename
})
module.exports = storage.bucket('cityinapocket')