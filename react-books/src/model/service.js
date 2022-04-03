const request = require('superagent')
const urlApi = require('../config/config-react').urlApi;
const path = (path) => {
    return `${urlApi}/${path}`
}

const fetchDataBooks = async() => {
    const data = await request.get(path('get-books'))
    return data.body
}

const insertDataBooks = async(title, author) => {
    const data = await request.get(path(`save/${title}/${author}`))
    return data.body
}

export default {
    fetchDataBooks,
    insertDataBooks
}