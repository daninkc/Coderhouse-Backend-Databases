const fs = require("fs");
const path = require("path");
const { config } = require("../../../config");
const CartModel = require(`../../../models/${config.type}/carts`);

class Cart {
 //For sql-type tables, I need to check if the table exists and if not, create it
  //For mongo and firebase it auto generates on document creation
  async check() {
    if (config.type === 'mariadb' || config.type === 'sqlite3') {
      const checkTable = await CartModel.check(); //llega true o false
      if (checkTable === false) {
        await CartModel.createTable()
      }
    }
  }
  async create(obj) {
    try {
      await this.check()
      const createdCart = await CartModel.create(obj)
      return createdCart;
    } catch (error) {
      throw error;
    }
  }
  async getById(selectedId) {
    try {
      await this.check()
      const cart = await CartModel.getById(selectedId)
      return cart;
    } catch (error) {
      throw error;
    }
  }
  async addProducts(cartId, product) {
    try {
      await this.check()
      const addedProducts = CartModel.addProducts(cartId, product)
      return addedProducts;
    } catch (error) {
      throw error;
    }
  }
  async deleteProducts(cartId, productId) {
    try {
      await this.check()
      const deletedProducts = CartModel.deleteProducts(cartId, productId)
      return deletedProducts;
    } catch (error) {
      throw error;
    }
  }
  async getAll() {
    try {
      await this.check()
      const allCarts = CartModel.getAll()
      return allCarts;
    } catch (error) {
      throw error;
    }
  }
  async deleteById(idToDelete) {
    try {
      await this.check()
      const deletedCart = CartModel.deleteById(idToDelete)
      return deletedCart;
    } catch (error) {
      throw error;
    }
  }
  async deleteAll() {
    try {
      await this.check()
      const deletionResult = CartModel.deleteAll();
      return deletionResult;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = new Cart();