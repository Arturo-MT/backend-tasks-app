const { Pool } = require('pg');
const { db } = require('./config');

const pool = new Pool({
    host: db.host,
    database: db.database,
    port: db.port,
    user: db.user,
    password: db.password,
    ssl:{
        rejectUnauthorized: false
    }
})

module.exports = pool;