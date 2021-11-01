const ProductRouter = require('./Product');
const HomeRouter = require('./Home');
const AdminRouter = require('./Admin');


const route = (app) => {
    app.use('/products',ProductRouter);
    app.use('/admin',AdminRouter);
    app.use('/',HomeRouter);

}


module.exports = route 