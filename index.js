const express = require('express');
const mongoose = require('mongoose');
const Product  = require('./models/product.model.js');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send("Hello from Node API Server")
});

app.post('/api/products', async (req, res) => {
    try {
        const product = await Product.create(req.body);
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

mongoose.connect("mongodb+srv://cypriansulwecs:8cSkRnVWt8JLnx33@cluster0.xsxvbwl.mongodb.net/Simple-Crud-App?retryWrites=true&w=majority&appName=Cluster0")
.then(() => {
    console.log("Connected to database!");
    app.listen(3000, () => {
        console.log('Server is running on port 3000');
    });
})
.catch(() => {
    console.error("Connection Failed!");
});