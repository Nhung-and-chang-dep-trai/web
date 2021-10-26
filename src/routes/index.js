const ProductRouter = require('./Product');


const route = (app) => {
    app.use('/products',ProductRouter);

}


module.exports = route 