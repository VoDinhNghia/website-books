const config = require('../config/config')
const knex = config.connection

const fetchData = async(table) => {
    const result = await knex.select().from(table)
    return result
}

const insertData = async(table, title, author) => {
    const resultInsert = await knex(table).insert({ title, author })
    return resultInsert
}

module.exports = {
    fetchData,
    insertData
}