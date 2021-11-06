const ProductRouter = require('./Product');
const HomeRouter = require('./Home');
const AdminRouter = require('./Admin');
const FeedbackRouter = require('./Feedback');
const {isLogin}= require('../middlewares/isLogin');

const route = (app) => {
    app.use('/products',ProductRouter);
    app.use('/admin', isLogin,AdminRouter);
    app.use('/feedback', FeedbackRouter);
    app.use('/',HomeRouter);
     
}

module.exports = route; 