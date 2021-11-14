exports.isLogin=(req,res,next)=>{
    req.session.user="Quốc đẹp trai";
    var result=req.session.user;
    if(result){
        next();
    }else{
        res.redirect('back');
    }
    
}