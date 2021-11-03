const express = require('express');
const router = express.Router();
const FeedbackController = require('../controllers/FeedbackController');

// Routing Admin - Manage Feedback
router.get('/', FeedbackController.getAll);

// Routing Customer -  Send Feedback
router.get('/feedback', FeedbackController.sendFeedback)
router.post('/feedback', FeedbackController.sendFeedback);

module.exports = router;