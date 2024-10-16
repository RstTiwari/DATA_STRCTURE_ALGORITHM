let user 
let post 

    
let postData = user.find({age:{$gt:30}}).select({age:1}).skip(pageNo).limit(50).lean();

