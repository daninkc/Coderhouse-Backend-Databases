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

  router.get("/:_id", async (req, res) => {
      const { _id } = req.params;
      const product = await ProductHandler.getById(_id);
      res.json(product);
  });

  router.post("/", adminCheck, async (req, res) => {
    const newProduct = await ProductHandler.create(req.body)
    res.json(newProduct)
  })

  router.put("/:_id", adminCheck, async (req, res) => {
    const { _id } = req.params;
    const editedProduct = await ProductHandler.editById(_id, req.body)
    res.json(editedProduct);
  });

  router.delete("/:_id", adminCheck, async (req, res) => {
    const { _id } = req.params;
    const deletedProduct = await ProductHandler.getById(_id);
    await ProductHandler.deleteById(_id)
    res.json(deletedProduct);
  });
};
