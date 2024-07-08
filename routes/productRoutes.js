// const express = require("express");

const router = require("express").Router();
const productController = require("../controllers/productController");

// router.get("/", (req, res) => {
//     res.send("Hello World");
// });

//get all products
router.get("/", productController.getAllProducts); 

//get product by id
router.get("/:id", productController.getProductById); 

//delete product by id
router.delete("/:id", productController.deleteProductById);   

//update product by id
router.put("/:id", productController.updateProductById);  

//create product
router.post("/", productController.createProduct);
  
module.exports = router;