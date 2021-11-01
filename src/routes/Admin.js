const express = require('express');
const router = express.Router();
const ProductController = require('../controllers/ProductController');

router.get('/manage-products', ProductController.getAll);

router.get('/create-product', ProductController.showCreate);

router.get('/products/:id/edit', ProductController.showEdit);

module.exports = router;