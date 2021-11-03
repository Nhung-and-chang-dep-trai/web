const express = require('express');
const router = express.Router();
const FeedbackController = require('../controllers/FeedbackController');

router.get('/manage-feedback', FeedbackController.getAll);

module.exports = router;