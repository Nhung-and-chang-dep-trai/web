
const ProductService=require('../services/product')


exports.getAll= async(req,res)=>{
    try{
        let products= await ProductService.getAll();
        const dataSearch=req.query;
        if(dataSearch&& dataSearch!==null){
            if(dataSearch.searchType==='1'){
                products=products.filter((item)=>{
                    return item.productName.toLowerCase().indexOf(dataSearch.keyword.toLowerCase())!==-1;
                    // return true
                })
            }else if(dataSearch.searchType==='2'){
                products=products.filter((item)=>{
                    return item.productTypeName.toLowerCase().indexOf(dataSearch.keyword.toLowerCase())!==-1;
                    // return true
                })
            }
        }
        let user =req.session.user?req.session.user:null;
        res.render('pages/home',{
            products:products,
            user :user
        });
    }catch(e){
        console.log(e);
        res.json([]);
    }
};

exports.showPageError=async(req,res)=>{
    res.render('pages/error-page')
}