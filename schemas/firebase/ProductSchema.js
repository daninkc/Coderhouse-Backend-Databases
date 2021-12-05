const Joi = require("joi")

const CreateProductSchema = Joi.object({
    name: Joi.string(),
    price: Joi.number(),
    imageUrl: Joi.string(),
    code: Joi.string(),
    description: Joi.string(),
    stock: Joi.number()
})

module.exports = { CreateProductSchema }