 async function fetchALlUser(){
  let allUser = await User.find().lean()
}

async function name(params) {
    
}


// this can be use for both  1, 2 point with age city  going in req.query  if query null fetch all users
app.get("/user",fetchALlUser)



app.post("/updateUser",updateUser)  // payload {user_id:user_id}