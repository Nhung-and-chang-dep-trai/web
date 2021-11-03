var conn=require('./../configs/database');


exports.getAll= async ()=>{
    try{
        var lstProducts = await conn.query('SELECT * from product');
         return lstProducts;
    }catch(e){
        throw e;
    }
};


//module.exports ={getAll}