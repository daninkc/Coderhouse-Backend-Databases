const knex = require("knex");
const { config } = require("../config")

let sqlDbConfig = { ...config }
delete sqlDbConfig.port;

const sqlite = knex({
    client: 'sqlite3',
    connection: {
        filename: "./db/ecommerce.sqlite"
    },
    useNullAsDefault: true,
    pool: { min: 0, max: 10 }
})

class SqliteDatabase {
    static client;
    constructor() {
        if (SqliteDatabase.client) {
            this.client = SqliteDatabase.client;
            return this;
        }
        SqliteDatabase.client = sqlite;
        this.client = SqliteDatabase.client;
    }
}

const db_sqlite = new SqliteDatabase()

module.exports = { db_sqlite }