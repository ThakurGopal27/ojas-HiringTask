const bcrypt = require('bcrypt');

const User = require('../Model/user');

// signup route handler

exports.signup =async(req,res)=>{
    try {
        // get data
        const {name , email , password , role} = req.body;
        //check if user already exist

        const existingUser = await User.findOne({email});
        if(existingUser){
            return res.status(400).json(
                {
                    success:false,
                    message:"user already exist !",
                }
            )
        }

        // secure password
    let hashedPassword ;
    try{
        hashedPassword = await bcrypt.hash(password,10);
    }
    catch(err){
        return res.status(500).json(
            {
                success:false,
                message:"Error in hashing Password!",  
            }
        );
    }
    //create user entry

    const user = await User.create({
         name,email,password:hashedPassword,role
    })
    return res.status(200).json({
        success:true,
        message:"User Created Successfully",
    });
    }catch (error) {
        console.error(err);
        return res.status(500).json({
            success:false,
            message:"User Cannot be Registered, Please try again later !",
        })
    }
}



