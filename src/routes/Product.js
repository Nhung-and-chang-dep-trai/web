const express = require('express');
const router = express.Router();
const ProductController = require('../controllers/ProductController');

// /* GET find by id list */
// router.get('/:id', findOne);

/* GET find list */
router.get('/', ProductController.getAll);

// /* POST */
// router.post('/', create);

// /* PUT */
// router.put('/:id', update);

// /* DELETE */
// router.delete('/:id', deleteOne);

// /* GET product details and show comments */
router.get('/product-detail/:id', ProductController.getProductDetails);

// /* POST custommer comment about a specific product */
router.post('/product-detail/:id', ProductController.sendComment);

module.exports = router;