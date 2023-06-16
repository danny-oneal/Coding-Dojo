const productsService = require("../services/products.service");

module.exports.getAllProducts = async (req, res) => {
    try {
        const products = await productsService.findAllProducts();
        res.json(products);
    } catch (err) {
        res.json({ error: err });
    }
};

module.exports.getProduct = async (req, res) => {
    try {
        const joke = await productsService.findProductById(req.params.id);
        res.json(joke);
    } catch (err) {
        res.json({ error: err });
    }
};

module.exports.postProduct = async (req, res) => {
    try {
        const joke = await productsService.createProduct(req.body);
        res.json(joke);
    } catch (err) {
        res.json({ error: err });
    }
};

module.exports.patchProduct = async (req, res) => {
    try {
        const joke = await productsService.updateProduct(req.params.id, req.body);
        res.sendStatus(200);
    } catch (err) {
        res.json({ error: err });
    }
};

module.exports.deleteProduct = async (req, res) => {
    try {
        const joke = await productsService.deleteProduct(req.params.id);
        res.sendStatus(200);
    } catch (err) {
        res.json({ error: err });
    }
};
