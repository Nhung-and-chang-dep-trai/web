const ProductRouter = require('./Product');
const AdminRouter = require('./Admin');
const FeedbackRouter = require('./Feedback');

const route = (app) => {
    app.use('/products',ProductRouter);
    app.use('/admin', AdminRouter);
    app.use('/', FeedbackRouter);
}


module.exports = route 