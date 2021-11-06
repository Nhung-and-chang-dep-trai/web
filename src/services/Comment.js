const CommentRepo = require('./../repositories/comment')

// Get the latest ID in SQL table
exports.getMaxID = async() =>{
    try{
        const result =await CommentRepo.getMaxID();
        return result;
    }catch(e){
        throw e;
    }
}

// Get all comments of the product base on productID
exports.getProductDetails = async(id) => {
    try {
        const result = await CommentRepo.getProductDetails(id);
        return result;
    } catch(e) {
        throw e;
    }
}

// Send comment
exports.sendComment = async(comment) => {
    try {
        const result = await CommentRepo.sendComment(comment);
        return result;
    } catch(e) {
        throw e;
    }
}