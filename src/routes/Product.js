const express = require('express');
const router = express.Router();

const ProductController = require('../controllers/ProductController');
const uploadMulter = require('../configs/File') 
const {isLogin}= require('../middlewares/isLogin');
// /* GET find by id list */
// router.get('/:id', findOne);

/* GET find list */
//router.post('/:id/delete/:cookie',isLogin,  ProductController.deleteByID);
router.post('/:id/delete',isLogin,  ProductController.deleteByID);

/* router.post('/update-product/submit',isLogin, ProductController.update); */
router.post('/update-product',isLogin, ProductController.update);

router.get('/:id', ProductController.showProduct);
// /* GET product details and show comments */
// router.get('/product-detail/:id', ProductController.getProductDetails);

// /* POST custommer comment about a specific product */
router.post('/:id', ProductController.sendComment);


module.exports = router;
