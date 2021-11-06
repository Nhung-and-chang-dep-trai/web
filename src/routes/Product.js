const express = require('express');
const router = express.Router();
const ProductController = require('../controllers/ProductController');
const uploadMulter = require('../configs/File') 
// /* GET find by id list */
// router.get('/:id', findOne);

/* GET find list */
router.post('/:id/delete', ProductController.deleteByID);

router.post('/create-product/submit',uploadMulter.single('productImage'), ProductController.create);

router.post('/update-product/submit', ProductController.update);

router.get('/:id', ProductController.showProduct);
// /* GET product details and show comments */
router.get('/product-detail/:id', ProductController.getProductDetails);

// /* POST custommer comment about a specific product */
router.post('/product-detail/:id', ProductController.sendComment);

module.exports = router;