const ProductService=require('../services/product')
const ProductTypeService=require('../services/productType')

exports.getAll= async(req,res)=>{
    try{
        let products= await ProductService.getAll();
        res.render('pages/admin/manage-products',{
            products:products
        });
    }catch(e){
        console.log(e);
        res.json([]);
    }
};
exports.deleteByID= async(req,res)=>{
    try{
        let result= await ProductService.deleteByID(req.params.id);     
        if(result.affectedRows!==0){
          res.redirect('/admin/manage-products');
        }
    }catch(e){
        console.log(e);
        res.json([]);
    }
};

exports.showCreate= async(req,res)=>{
    try{        
            let listProductTypes = await ProductTypeService.getAll(); 
            res.render('pages/admin/create-product',{
                listProductTypes,
            });
    }catch(e){
        console.log(e);
        res.json([]);
    }
};

exports.create= async(req,res)=>{
    try{
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
    }catch(e){
        console.log(e);
        res.json([]);
    }
};

exports.showEdit= async(req,res)=>{
    try{   
        let count= await ProductService.isExisted(req.params.id); 
        if(!count){
            res.redirect('/404');
        }
        let listProductTypes = await ProductTypeService.getAll(); 
        let editProduct=await ProductService.getByID(req.params.id); 
        res.render('pages/admin/update-product',{
            listProductTypes,
            editProduct:editProduct,
        });
    }catch(e){
        console.log(e);
        res.json([]);
    }
};

exports.update= async(req,res)=>{
    try{
        var data=req.body;
        console.log('data',data )
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
        res.json([]);
    }
};

//hiển thị chi tiết sản phẩm
exports.showProduct= async(req,res)=>{
    try{   
        let count= await ProductService.isExisted(req.params.id); 
        if(!count){
            res.redirect('/404');
        }
        let product=await ProductService.getByID(req.params.id);  
        res.render('pages/product-detail',{
            product
        });
    }catch(e){
        console.log(e);
        res.json([]);
    }
};