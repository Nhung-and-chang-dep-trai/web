const ProductService=require('../services/product')
const ProductTypeService=require('../services/productType')
const CommentService = require('../services/Comment')

exports.getAll= async(req,res)=>{
    try{
        let user =req.session.user?req.session.user:null;
        let csrfToken = req.session.csrfToken?req.session.csrfToken:null;
        let products= await ProductService.getAll();
        res.render('pages/admin/manage-products',{
        
            products:products,
            user,
            csrfToken
            
        });
        
    }catch(e){
        console.log(e);
        res.redirect('/');

    }
};
exports.deleteByID= async(req,res)=>{
    try{
        let user =req.session.user?req.session.user:null;
        if (req.body.csrfToken == req.session.csrfToken) {
            let result= await ProductService.deleteByID(req.params.id);    
            if(result.affectedRows!==0){
                res.redirect('/admin/manage-products');
            }
        } else {
            res.status(401).json({
                message: "Invalid csrf token"
            })
        }
        //console.log("csrf token delete:", req.body.csrfToken);
        
    }catch(e){
        console.log(e);
        res.redirect('/');

    }
};

exports.showCreate= async(req,res)=>{
    try{        
    let user =req.session.user?req.session.user:null;
        
        let listProductTypes = await ProductTypeService.getAll(); 
        res.render('pages/admin/create-product',{
            
            listProductTypes,
            user,
            
        });

    }catch(e){
        console.log(e);
        res.redirect('/');

    }
};

exports.create= async(req,res)=>{
    try{
    let user =req.session.user?req.session.user:null;

        var data=req.body;
        let newProductID= await ProductService.getMaxID();  
        var product={
            productID:newProductID+1,
            productName:data.productName,
            productTypeID:data.productTypeID,
            salePrice:Number(data.salePrice),
            description:data.description,
            productImage:`/images/uploads/${req.file.filename}`
        }
        let result= await ProductService.create(product);     
        res.redirect('/admin/manage-products');
            
    } catch(e){
        console.log(e);
        res.redirect('/');

            }
            
};

exports.showEdit= async(req,res)=>{
    try{   
    let user =req.session.user?req.session.user:null;

        let count= await ProductService.isExisted(req.params.id); 
        if(!count){
            res.redirect('/404');
        }
        let listProductTypes = await ProductTypeService.getAll(); 
        let editProduct=await ProductService.getByID(req.params.id); 
        res.render('pages/admin/update-product',{
            
            listProductTypes,
            editProduct:editProduct,
            user
        });
        
    }catch(e){
        console.log(e);
        res.redirect('/');

    }
}


// Get all products
// exports.getAll= async(req,res)=>{
//     try{
//         let products= await ProductService.getAll();
//         //res.json(products);
//         res.render('pages/home');
       
//     }catch(e){
//         console.log(e);
//         res.json([]);
//     }
// };

exports.update= async(req,res)=>{
    try{
        let user =req.session.user?req.session.user:null;

        var data=req.body;
        var product={
            productID:data.productID,
            productName:data.productName,
            productTypeID:data.productTypeID,
            salePrice:Number(data.salePrice),
            description:data.description,
        }
        let result= await ProductService.updateByID(product); 
    
        res.redirect('/admin/manage-products');
       
    }catch(e){
        console.log(e);
        res.redirect('/');

    }
};

//hi???n th??? chi ti???t s???n ph???m
exports.showProduct= async(req,res)=>{
    try{  
    let user =req.session.user?req.session.user:null;

        console.log("session",req.session);
        let count= await ProductService.isExisted(req.params.id); 
        if(!count){
            res.redirect('/404');
        }
        let product=await ProductService.getByID(req.params.id);  
        let productDetailComment = await CommentService.getListCommentByID(req.params.id);
        res.render('pages/product-detail',{
            product,
            comments: productDetailComment,
            id:req.params.id,
            user
        });
    }catch(e){
        console.log(e);
        res.redirect('/');

    }
};
// // Get product details and show all comment(s) of this product
// exports.getProductDetails = async(req,res) => {
//     try{
        
//         //console.log(req.params.id);
//         res.render('pages/product-detail',{
            
//         });
//     } catch(e) {
//         console.log(e);
//         res.json([]);
//     }
// }

// Send comment about the product
exports.sendComment = async(req,res) => {
    try {
        let user =req.session.user?req.session.user:null;

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
        //console.log(custComment); // log result - for debugging

        let result = await CommentService.sendComment(custComment);
        // if (result === null) {
        //     res.render("pages/warning-page");
        // }
        res.redirect('/products/' + id); 
    } catch(e) {
        console.log(e);
        res.redirect('/');

    }
}

