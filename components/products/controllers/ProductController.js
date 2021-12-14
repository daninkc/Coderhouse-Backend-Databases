const fs = require("fs");
const path = require("path");
const { config } = require("../../../config");
console.log(`Database running in ${config.type}`)
const ProductModel = require(`../../../models/${config.type}/products`);

class ProductController {
  //For sql-type tables, I need to check if the table exists and if not, create it
  //For mongo and firebase it auto generates on document creation
  async check() {
    if (config.type === 'mariadb' || config.type === 'sqlite3') {
      const checkTable = await ProductModel.check(); //llega true o false
      if (checkTable === false) {
        await ProductModel.createTable()
      }
    }
  }
  async create(obj) {
    try {
      await this.check()
      const newProduct = await ProductModel.create(obj)
      return newProduct;
    } catch (error) {
      throw error;
    }
  }
  async getById(selectedId) {
    try {
      await this.check()
      const product = await ProductModel.getById(selectedId)
      return product;
    } catch (error) {
      throw error;
    }
  }
  async getAll() {
    try {
      await this.check()
      const allProducts = await ProductModel.getAll()
      return allProducts;
    } catch (error) {
      throw error;
    }
  }
  async editById(idToEdit, newItem) {
    try {
      await this.check()
      const editedProduct = await ProductModel.editById(idToEdit, newItem)
      return editedProduct;
    } catch (error) {
      throw error;
    }
  }
  async deleteById(idToDelete) {
    try {
      await this.check()
      const deletedProduct = await ProductModel.deleteById(idToDelete)
      return deletedProduct;
    } catch (error) {
      throw error;
    }
  }
  async deleteAll() {
    try {
      await this.check()
      const deletionResult = await ProductModel.deleteAll()
      return deletionResult;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = new ProductController();
