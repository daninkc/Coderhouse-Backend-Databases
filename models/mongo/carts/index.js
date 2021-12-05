const mongoose = require("mongoose")
const { Schema, model } = require("mongoose");
const connection = require("../../../services/MongoClientService");
const { CreateCartSchema } = require("../../../schemas/mongo/CartSchema");
const cartSchema = new Schema(CreateCartSchema);
const cartModel = model("carts", cartSchema);

//PARA MONGO NO NECESITO CREAR LA TABLA
//SE CREA AUTOMÁTICAMENTE CUANDO LE INSERTO EL PRIMER DOCUMENTO

module.exports = {
    create: async (cartToCreate) => {
        try {
            const createdCart = await cartModel.create(cartToCreate)
            return createdCart;
        } catch (error) {
            console.log(error)
        }
    },
    getAll: async () => {
        try {
            await cartModel.find();
        } catch (error) {
            console.log(error)
        }
    },
    getById: async (id) => {
        try {
            const cart = await cartModel.findOne({ _id: id })
            return cart;
        } catch (error) {
            console.log(error)
        }
    },
    addProducts: async (_id, product) => {
        let currentCart = await cartModel.findOne({ _id })
        currentCart.products.push(product);
        await currentCart.save();
    },
    deleteProducts: async (cartId, productId) => {
        const currentCart = await cartModel.findOne({ _id: cartId })
        const updatedArr = currentCart.products.filter((item) => {
            return item._id.toString() !== productId
        })
        await cartModel.findOneAndUpdate({ _id: cartId }, { products: updatedArr })
    },
    deleteById: async (idToDelete) => {
        await cartModel.deleteOne({ _id: idToDelete })
    },
    deleteAll: async () => {
        await cartModel.deleteMany({})
    }
}