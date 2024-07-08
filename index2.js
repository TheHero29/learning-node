const express = require("express");
const app = express();
const port = 3001;
require('dotenv').config();
//b1rvziMCi08qfFh0
//middleware which parses the incoming request into json
app.use(express.json());
const mongoose = require("mongoose");
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Connected to MongoDB..."))
  .catch((err) => console.error("Failed to connect to MongoDB...", err));

const productSchema = new mongoose.Schema({
  product_name: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  isInStock: {
    type: Boolean,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});
const productModel = mongoose.model("products", productSchema);

app.get("/", (req, res) => {
  res.send("Hello World");
});
app.get("/api/products", async (req, res) => {
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
);
app.get("/api/products/:id", async (req, res) => {
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
);
app.delete("/api/products/:id", async (req, res) => {
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
);
app.put("/api/products/:id", async (req, res) => {
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
);
app.post("/api/products", async (req, res) => {
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
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
