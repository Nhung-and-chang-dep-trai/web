const ProductRepo =require ('./../repositories/product.js')

exports.getAll = async() =>{
    try{
        const lstProducts=await ProductRepo.getAll();
        return lstProducts;
    }catch(e){
        throw e;
    }
}

/* `````````````````````````````````` */