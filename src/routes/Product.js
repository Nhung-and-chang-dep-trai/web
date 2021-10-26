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


module.exports = router;