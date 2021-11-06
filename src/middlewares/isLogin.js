exports.isLogin=(req,res,next)=>{
    var result=req.session.isLogin;
    if(result){
        next();
    }else{
        res.redirect('back');
    }
    
}