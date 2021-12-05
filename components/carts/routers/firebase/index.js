const { Router } = require("express");
const router = Router();
const ProductHandler = require("../../../products/controllers/ProductController");
const CartHandler = require("../../../carts/controllers/CartController");

module.exports = function cart(app) {
  app.use("/cart", router);

  router.post("/", async (req, res, next) => {
    const newCart = {
      timestamp: Date.now(),
      products: []
    }
    const { _id } = await CartHandler.create(newCart)
    res.json(_id);
  });

  router.delete("/:_id", async (req, res, next) => {
    const { _id } = req.params;
    const deletedCart = await CartHandler.getById(_id);
    CartHandler.deleteById(_id)
    res.json(deletedCart);
  });

  router.get("/:_id", async (req, res, next) => {
    const { _id } = req.params;
    const cart = await CartHandler.getById(_id)
    res.json(cart);
  });

  router.get("/:_id/products", async (req, res, next) => {
    const { _id } = req.params;
    const cart = await CartHandler.getById(_id)
    if (cart) {
      const { products } = cart;
      if (products.length === 0) {
        res.send('No products in cart.')
      } else {
        res.json(products);
      }
    } else {
      res.send('No cart found')
    }
  });

  router.post("/:_id/products", async (req, res, next) => {
    const { _id } = req.params;
    const { productId } = req.body
    const product = await ProductHandler.getById(productId)
    const cart = await CartHandler.addProducts(_id, product);
    res.json(cart);
  });

  router.delete("/:_id/products/:prod_id", async (req, res, next) => {
    const { _id, prod_id } = req.params;
    const listAfterDeletion = await CartHandler.deleteProducts(_id, prod_id)
    res.json(listAfterDeletion);
  });

};
