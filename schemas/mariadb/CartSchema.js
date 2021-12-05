const Joi = require("joi")

const ProductSchema = require("./ProductSchema")

const CreateCartSchema = Joi.object({
    timestamp: Joi.date(),
    products: [ProductSchema]
})

module.exports = { CreateCartSchema }