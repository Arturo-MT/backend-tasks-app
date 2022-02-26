const { config } = require('dotenv');

config();

module.exports ={
    db:{
        host: process.env.DB_HOST,
        database: process.env.DB,
        port: process.env.DB_PORT,
        user: process.env.DB_USER,
        password: process.env.DB_Password
    }
}