const { Schema } = require("mongoose");

const CreateProductSchema = new Schema({ 
    name: String,
    price: Number,
    imageUrl: String,
    code: String,
    description: String,
    stock: Number
})

module.exports = { CreateProductSchema }