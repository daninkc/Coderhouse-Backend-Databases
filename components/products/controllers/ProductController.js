const { config } = require("../../../config");
const ProductModel = require(`../../../models/${config.type}/products`);

console.log(`Database running in ${config.type}`)

class ProductController {
  //For sql-type tables, I need to check if the table exists and if not, create it
  //For mongo and firebase it auto generates on document creation
  async check() {
    if (config.type === 'mariadb' || config.type === 'sqlite3') {
      const checkTable = await ProductModel.check();
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
      return error;
    }
  }
  async getById(selectedId) {
    try {
      await this.check()
      const product = await ProductModel.getById(selectedId)
      return product;
    } catch (error) {
      return error;
    }
  }
  async getAll() {
    try {
      await this.check()
      const allProducts = await ProductModel.getAll()
      return allProducts;
    } catch (error) {
      return error;
    }
  }
  async editById(idToEdit, newItem) {
    try {
      await this.check()
      const editedProduct = await ProductModel.editById(idToEdit, newItem)
      return editedProduct;
    } catch (error) {
      return error;
    }
  }
  async deleteById(idToDelete) {
    try {
      await this.check()
      const deletedProduct = await ProductModel.deleteById(idToDelete)
      return deletedProduct;
    } catch (error) {
      return error;
    }
  }
  async deleteAll() {
    try {
      await this.check()
      const deletionResult = await ProductModel.deleteAll()
      return deletionResult;
    } catch (error) {
      return error;
    }
  }
}

module.exports = new ProductController();
