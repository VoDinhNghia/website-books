import request from 'superagent';
const urlApi = require('../config/config-react').urlApi;
const path = (path) => {
    return urlApi.join(path)
}

const fetchDataBooks = async() => {
    let data = [];
    request.get(path('/get-books')).then(msg => {
        data = msg.body
    })
    return data
}

const insertDataBooks = async(title, author) => {
    let data = [];
    request.get(path(`/save/${title}/${author}`)).then(msg => {
        data = msg.body
    })
    return data
}

module.exports = {
    fetchDataBooks,
    insertDataBooks
}