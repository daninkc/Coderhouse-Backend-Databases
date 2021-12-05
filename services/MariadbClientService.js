const knex = require("knex");
const { config } = require("../config")

let sqlDbConfig = { ...config }
delete sqlDbConfig.port;

const mariadb = knex({
    client: 'mysql',
    connection: sqlDbConfig,
    pool: { min: 0, max: 10 }
})

class MariaDbDatabase {
    static client;
    constructor() {
        if (MariaDbDatabase.client) {
            this.client = MariaDbDatabase.client;
            return this;
        }
        MariaDbDatabase.client = mariadb;
        this.client = MariaDbDatabase.client;
    }
}

const db_mariadb = new MariaDbDatabase()

module.exports = { db_mariadb }