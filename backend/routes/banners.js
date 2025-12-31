const express = require('express');
const {
    getBanners,
    createBanner,
    updateBanner,
    deleteBanner
} = require('../controllers/banners');

const { upload } = require('../utils/storage');

const router = express.Router();

router
    .route('/')
    .get(getBanners)
    .post(upload.single('image'), createBanner);

router
    .route('/:id')
    .put(upload.single('image'), updateBanner)
    .delete(deleteBanner);

module.exports = router;
