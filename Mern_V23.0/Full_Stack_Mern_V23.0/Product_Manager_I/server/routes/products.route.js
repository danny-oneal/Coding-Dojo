const express = require("express");
const router = express.Router();
const productsController = require("../controllers/products.controller");

router.get("/", productsController.getAllProducts);
router.get("/:id", productsController.getProduct);
router.post("/", productsController.postProduct);
router.patch("/:id", productsController.patchProduct);
router.delete("/:id", productsController.deleteProduct);

module.exports = router;
