const Pool = require('pg').Pool
const database = new Pool({
    user: 'jeko',
    host: '127.0.0.1',
    database: 'alaunt',
    password: '**',
    port: 5432,
})

module.exports = database