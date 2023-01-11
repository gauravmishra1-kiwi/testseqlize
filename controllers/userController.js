const User= require("../models/user")

module.exports.addUsers=async(req,res)=>{
    try {
        postData = req.body;
    if(postData.length>1){
         newUser = await User.bulkCreate(postData)
    }
    else{
         newUser = await User.create(postData)
    }
    res.send("added")
    }catch(error){
        res.send(error)
    }
}

module.exports.readUsers=async(req,res)=>{
    try {
        const user = req.User;
        const Data = await User.findAll(user);
        res.send(Data);
    }catch(error){
        res.send(error)
    }
}

module.exports.readUser=async(req,res)=>{
    try {
        const user = req.User;
        const Data = await User.findOne({
        where:{
            id:req.params.id
        }
    })
        res.send(Data);
    }catch(error){
        res.send(error)
    }
}

module.exports.updateUsers = async(req,res)=>{
    try {
        const updateddata=req.body;
        const Data = await User.update(updateddata,{
            where:{
                id:req.params.id
            }
        })
        res.status(200).json({message : "updated"})
    }catch(error){
        res.send(error)
    }
}

module.exports.deleteUsers = async(req,res)=>{
    try {
        const Data = await User.destroy({
            where:{
                id:req.params.id
            }
        })
        res.status(200).json({message : "deleted"})
    }catch(error){
        res.send(error)
    }
}