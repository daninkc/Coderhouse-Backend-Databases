const { Schema } = require("mongoose");

const { CreateProductSchema } = require("./ProductSchema")

const CreateCartSchema = new Schema({
    id: Number,
    timestamp: Date,
    products: [CreateProductSchema]
})

module.exports = { CreateCartSchema }