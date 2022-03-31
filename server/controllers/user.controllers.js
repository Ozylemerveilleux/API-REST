const User = require("../models/user");

//create user
module.exports.addUser = async (req, res)=>{
    const {Lastname, Firstname, Email} = req.body;
    try{
        const user = await User.create({Lastname, Firstname, Email})
        res.status(201).json(`user added ${user}`)
    }
    catch(err){
        res.stat(500).json({message : err})
    }  
}

//show user
module.exports.showUser = async (req, res)=>{
    try{
        const user = await User.findById(req.params.id);
        res.status(200).json(user)
    }
    catch(err){
        res.stat(500).json(`message :  ${err}`);
    }  
}

//view all users
module.exports.allUsers = async (req, res)=>{
    try{
        const users = await User.find();
        res.status(200).json(users)
    }
    catch(err){
        res.stat(500).json(`message :  ${err}`);
    }  
}

//delete user
module.exports.removeUser = async (req, res)=>{
    await User.remove({_id: req.params.id}).exec();
    res.status(200).send("user deleted")
}

//update user
module.exports.allUsers = async (req, res)=>{
    try{
        const users = await User.findByIdAndUpdate(
            {_id: req.params.id},
            {
                $set:{
                    Lastname: req.body.Lastname,
                    Firstname: Firstname.body.Firstname,
                    Email: req.body.Email,
                }
            },
            {new : true});
        res.status(200).json({message: "Update successfully"})
    }
    catch(err){
        res.stat(500).send({message : err});
    }  
}
