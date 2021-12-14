const { Router } = require("express");
const router = Router();
const ProductHandler = require("../../../products/controllers/ProductController");
const CartHandler = require("../../../carts/controllers/CartController");

module.exports = function cart(app) {
  app.use("/cart", router);

  router.post("/", async (req, res, next) => {
    const newCart = {
      timestamp: Date.now()
    }
    const createdCart = await CartHandler.create(newCart)
    if (createdCart) {
      res.json(createdCart.at(0));
    } else {
      res.send('An error ocurred.')
    }
  });

  router.delete("/:id", async (req, res, next) => {
    const { id } = req.params;
    const deletedCart = await CartHandler.getById(id);
    await CartHandler.deleteById(id)
    res.json(deletedCart);
  });

  router.get("/:id", async (req, res, next) => {
    const { id } = req.params;
    const cart = await CartHandler.getById(id)
    if (cart) {
      res.json(cart);
    } else {
      res.send('Cart not found')
    }
  });

  router.get("/:id/products", async (req, res, next) => {
    const { id } = req.params;
    const cart = await CartHandler.getById(id)
    const { products } = cart.at(0)
    if (products && products.length > 0) {
      res.json(products);
    } else {
      res.send('Products not found in the selected cart')
    }
  });

  router.post("/:id/products", async (req, res, next) => {
    const { id } = req.params;
    const { productId } = req.body
    const product = await ProductHandler.getById(productId)
    if (product && product.length > 0) {
      await CartHandler.addProducts(id, productId);
      res.send(`Added product ${productId} to cart ${id}`);
    } else {
      res.send('Product to add was not found.')
    }
  });

  router.delete("/:id/products/:prod_id", async (req, res, next) => {
    const { id, prod_id } = req.params;
    const listAfterDeletion = await CartHandler.deleteProducts(id, prod_id)
    res.json(listAfterDeletion);
  });

};
