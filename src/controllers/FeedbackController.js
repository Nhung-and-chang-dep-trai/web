const FeedbackService = require('../services/Feedback');

// Admin Area - Manage feedback
exports.getAll = async(req,res) => {
    try {
        let feedbacks = await FeedbackService.getAll();
        res.render('pages/admin/manage-feedback', {
            feedbacks: feedbacks
        });
    } catch(e){
        console.log(e);
        res.json([]);
    }
}

// Render view "feedback"
exports.renderSendFeedback = async (req,res) => {
    try {
        res.render('pages/feedback');
    } catch(e){
        console.log(e);
        res.json([]);
    }
}

// Customer send Feedback
exports.sendFeedback = async(req,res) => {
    try {
        var data = req.body;
        //console.log(data);
        var newFeedbackID = await FeedbackService.getMaxID();
        var feedback={
            feedbackID: newFeedbackID+1,
            custName: data.custName,
            productName: data.productName,
            custPhone: data.custPhone,
            custEmail: data.custEmail,
            content: data.content
        }
        //console.log(feedback);
        let result = await FeedbackService.sendFeedback(feedback);
        res.redirect('/feedback');
    } catch(e) {
        console.log(e);
        res.json([]);
    }
}
