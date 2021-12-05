const mongoose = require("mongoose")
const { Schema, model } = require("mongoose");
const connection = require("../../../services/MongoClientService");
const { CreateProductSchema } = require("../../../schemas/mongo/ProductSchema");
const productSchema = new Schema(CreateProductSchema);
const productModel = model("products", productSchema);

//PARA MONGO NO NECESITO CREAR LA TABLA
//SE CREA AUTOMÁTICAMENTE CUANDO LE INSERTO EL PRIMER DOCUMENTO

module.exports = {
    create: async (productToCreate) => {
        try {
            const newProduct = await productModel.create(productToCreate);
            return newProduct;
        } catch (error) {
            console.log(error)
        }
    },
    getAll: async () => {
        try {
            const allProducts = await productModel.find();
            return allProducts;
        } catch (error) {
            console.log(error)
        }
    },
    getById: async (id) => {
        try {
            const product = await productModel.findOne({ id })
            return product;
        } catch (error) {
            console.log(error)
        }
    },
    editById: async (idToEdit, editedProduct) => {
        try {
            const { name, price, imageUrl, stock, code, description } = editedProduct;
            const productToUpdate = await productModel.findOne({ id: idToEdit })
            if (name) {
                productToUpdate.name = name;
            }
            if (price) {
                productToUpdate.price = price;
            }
            if (imageUrl) {
                productToUpdate.imageUrl = imageUrl;
            }
            if (stock) {
                productToUpdate.stock = stock;
            }
            if (code) {
                productToUpdate.code = code;
            }
            if (description) {
                productToUpdate.description = description;
            }
            await productToUpdate.save()
        } catch (error) {
            console.log(error)
        }
    },
    deleteById: async (idToDelete) => {
        await productModel.deleteOne({ id: idToDelete })
    },
    deleteAll: async () => {
        await productModel.deleteMany({})
    }
}