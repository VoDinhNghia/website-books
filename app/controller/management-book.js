const db = require('../model/query-db')

const getDataBooks = async(req, res) => {
    try {
        const fetchData = await db.fetchData('books')
        res.send(fetchData)
    } catch (error) {
        console.log('api getDataBooks', error)
        res.send({ msg: 'server error' })
    }
}

const insertBooks = async(req, res) => {
    const { title = '', author = '' } = req.params
    try {
        await db.insertData('books', title, author)
        res.send({ msg: 'insert success' })
    } catch (error) {
        console.log('api insertBooks', error)
        res.send({ msg: 'server error' })
    }
}

module.exports = {
    getDataBooks,
    insertBooks
}