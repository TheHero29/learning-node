// const express = require("express");

const router = require("express").Router();
const productController = require("../controllers/productController");

router.get("/", (req, res) => {
    res.send("Hello World");
});

//get all products
router.get("/api/products", productController.getAllProducts); 

//get product by id
router.get("/api/products/:id", productController.getProductById); 

//delete product by id
router.delete("/api/products/:id", productController.deleteProductById);   

//update product by id
router.put("/api/products/:id", productController.updateProductById);  

//create product
router.post("/api/products", productController.createProduct);
  