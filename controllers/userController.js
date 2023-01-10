const User= require("../models/user")

module.exports.addUsers=async(req,res)=>{
    try {

       const user= new User({
        firstName:req.body.firstName,
        lastName:req.body.lastName,
            
        });
        const user_data=await user.save();
        res.send("added")
    }catch(error){
        res.send(error)
    }
}