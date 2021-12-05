const { Router } = require("express");
const router = Router();
const ProductHandler = require("../../controllers/ProductController")
const adminCheck = require("../../../../utils/middlewares/adminCheck");

module.exports = function products(app) {
  app.use("/products", router);

  router.get("/", async (req, res) => {
    const allProducts = await ProductHandler.getAll();
    if (allProducts && allProducts.length > 0) {
      res.json(allProducts)
    } else {
      res.send("No products found.");
    }
  })

  router.get("/:id", async (req, res) => {
      const { id } = req.params;
      const product = await ProductHandler.getById(id);
      if (product && product.length > 0) {
        res.json(product);
      } else {
        res.send('Product was not found');
      }
  });

  router.post("/", adminCheck, async (req, res) => {
    const newProduct = await ProductHandler.create(req.body)
    res.json(newProduct.at(0))
  })

  router.put("/:id", adminCheck, async (req, res) => {
    const { id } = req.params;
    const editedProduct = await ProductHandler.editById(id, req.body)
    res.json(editedProduct);
  });

  router.delete("/:id", adminCheck, async (req, res) => {
    const { id } = req.params;
    const deletedProduct = await ProductHandler.getById(id);
    ProductHandler.deleteById(id)
    res.json(deletedProduct);
  });
};
