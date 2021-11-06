const express = require('express');
const router = express.Router();
const ProductController = require('../controllers/ProductController');
const FeedbackController = require('../controllers/FeedbackController');

router.get('/manage-products', ProductController.getAll);

router.get('/create-product', ProductController.showCreate);

router.get('/products/:id/edit', ProductController.showEdit);


router.get('/manage-feedback', FeedbackController.getAll);

module.exports = router;