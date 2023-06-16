const Product = require("../models/products.model");

module.exports.findAllProducts = async () => {
    const products = await Product.find();
    return products;
};

module.exports.findProductById = async (id) => {
    const product = await Product.findById(id);
    return product;
};

module.exports.createProduct = async (product) => {
    const newProduct = await Product.create(product);
    return newProduct;
};

module.exports.updateProduct = async (id, product) => {
    const updatedProduct = await Product.updateOne({ _id: id }, product);
    return updatedProduct;
};

module.exports.deleteProduct = async (id) => {
    const deletedProduct = await Product.deleteOne({ _id: id });
    return deletedProduct;
};
