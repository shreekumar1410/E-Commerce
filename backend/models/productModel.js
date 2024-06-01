const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    description: String,
    category: String,
    ratings: String,
    images: [{
        image: String,
    }],
    seller: String,
    stock: String,
    numofReviews: String,
    createAt : Date
})

const productModel = mongoose.model('Product', productSchema);

module.exports = productModel;