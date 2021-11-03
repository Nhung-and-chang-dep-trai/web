const ProductService=require('../services/Product')
const CommentService = require('../services/Comment')

// Get all products
exports.getAll= async(req,res)=>{
    try{
        let products= await ProductService.getAll();
        //res.json(products);
        res.render('pages/home');
       
    }catch(e){
        console.log(e);
        res.json([]);
    }
};

// Get product details and show all comment(s) of this product
exports.getProductDetails = async(req,res) => {
    try{
        let productDetailComment = await CommentService.getProductDetails(req.params.id);
        //console.log(req.params.id);
        res.render('pages/product-detail',{
            comments: productDetailComment,
            id: req.params.id
        });
    } catch(e) {
        console.log(e);
        res.json([]);
    }
}

// Send comment about the product
exports.sendComment = async(req,res) => {
    try {
        var data = req.body;
        var id = req.params.id;
        //console.log(data);
        //console.log(id);

        var newCommentID = await CommentService.getMaxID();
        var custComment={
            commentID: newCommentID + 1,
            commentTime: new Date().toString(), // convert type Date to type String
            custName: data.custName,
            custEmail: data.custEmail,
            custPhone: data.custPhone,
            content: data.content,
            productID: id
        }
        console.log(custComment); // log result - for debugging

        let result = await CommentService.sendComment(custComment);
        res.redirect('/products/product-detail/' + id); 
    } catch(e) {
        console.log(e);
        res.json([]);
    }
}

