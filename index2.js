const express = require("express");
const app = express();
const port = 3001;
//b1rvziMCi08qfFh0
//middleware which parses the incoming request into json
app.use(express.json());
const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://loukikthatte01:b1rvziMCi08qfFh0@cluster0.lvpssvp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
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
    const products = await productModel.find();
    res.send(products);
}
);
app.delete("/api/products/:id", async (req, res) => {
    const product = await productModel.deleteOne({_id:req.params.id});
    if (!product)
        return res.status(404).send("Product with given ID not found");
    res.send(product);
}
);
app.put("/api/products/:id", async (req, res) => {
    const product = await productModel.updateOne(
        { _id: req.params.id },
        {
            $set: {
                product_name: req.body.product_name,
                price: req.body.price,
                isInStock: req.body.isInStock,
                description: req.body.description,
                category: req.body.category,
                image: req.body.image,
            },
        }
    );
    if (!product)
        return res.status(404).send("Product with given ID not found");
    res.send(product);
}
);
app.post("/api/products", async (req, res) => {
    const body = req.body;
    const product = productModel.create({
        product_name: body.product_name,
        price: body.price,
        isInStock: body.isInStock,
        description: body.description,
        category: body.category,
        image: body.image,
    })
    // console.log(product);
    console.log('Product created successfully');
    return res.status(201).json({message:'Product created successfully'});
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
