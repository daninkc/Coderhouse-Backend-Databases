const mongoose = require("mongoose");
const MONGO_DB = process.env.MONGO_DB_URI;
const DB_NAME = process.env.DB_NAME;

let connection = null;

(async() => {
    try {
        connection = await mongoose.connect(`${MONGO_DB}${DB_NAME}`);
    } catch (error) {
        console.log(error);
    }
})();

module.exports = connection;