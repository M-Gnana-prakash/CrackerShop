const express = require('express');
const {
    getProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct
} = require('../controllers/products');

const { upload } = require('../utils/storage');

const router = express.Router();

router
    .route('/')
    .get(getProducts)
    .post(upload.single('image'), createProduct);

router
    .route('/:id')
    .get(getProduct)
    .put(upload.single('image'), updateProduct)
    .delete(deleteProduct);

module.exports = router;
