
const ProductService=require('../services/product')


exports.getAll= async(req,res)=>{
    try{
        let products= await ProductService.getAll();
        res.json(products);
    }catch(e){
        console.log(e);
        res.json([]);
    }
};

