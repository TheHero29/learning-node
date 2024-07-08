const productModel = require('../models/product.js');

exports.getProductById = async (req, res) => {
    try{
      const product = await productModel.findById({_id:req.params.id});
      if (!product)
      return res.status(404).send("Product with given ID not found");
      res.send(product);
    }
    catch(err){
      return res.status(404).send("Product with given ID not found");
    }
    
}
exports.getAllProducts = async (req, res) => {
    try{
      const products = await productModel.find({});
      if (!products)
      return res.status(404).send("NO products available");
      res.send(products);
    }
    catch(err){
      return res.status(404).send("error in fetching products");
    }
      
  }
exports.createProduct = async (req, res) => {
    try{
      const body = req.body;
      const product = productModel.create({
          product_name: body.product_name,
          price: body.price,
          isInStock: body.isInStock,
          description: body.description,
          category: body.category,
          image: body.image,
      });
      console.log('Product created successfully');
      return res.status(201).json({message:'Product created successfully'});
    }
    catch(err){ 
      return res.status(404).send("Some error occured while creating product");
    }    
}

 exports.updateProductById = async (req, res) => {
    try{
      // or we can use findByIdAndUpdate method
      // updateOne
      const product = await productModel.findByIdAndUpdate(req.params.id,req.body,{new:true});
        // {
        //     $set: {
        //         product_name: req.body.product_name,
        //         price: req.body.price,
        //         isInStock: req.body.isInStock,
        //         description: req.body.description,
        //         category: req.body.category,
        //         image: req.body.image,
        //     },
        // }
      if (!product)
        return res.status(404).send("Product with given ID not found");
      res.send(product);
    }
    catch(err){
      return res.status(404).send("Product with given ID not found");
    }
      
}

exports.deleteProductById =  async (req, res) => {
    try{
      const product = await productModel.deleteOne({_id:req.params.id});
      if (!product)
          return res.status(404).send("Product with given ID not found");
      res.send(product);
    }
    catch(err){
      return res.status(404).send("Product with given ID not found");
    } 
}