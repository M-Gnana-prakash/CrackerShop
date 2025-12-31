const express = require('express');
const {
    getCategories,
    getCategory,
    createCategory,
    updateCategory,
    deleteCategory
} = require('../controllers/categories');

const { upload } = require('../utils/storage');

const router = express.Router();

router
    .route('/')
    .get(getCategories)
    .post(upload.single('image'), createCategory);

router
    .route('/:id')
    .get(getCategory)
    .put(upload.single('image'), updateCategory)
    .delete(deleteCategory);

module.exports = router;
