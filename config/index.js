require("dotenv").config()

const config = {
    port: process.env.PORT || 8000,
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'ecommerce',
    environment: process.env.NODE_ENV || 'production',
    type: process.env.DB_TYPE || 'mongo'
}

module.exports = {config}