const usersModel = require('../models/usersModels.js');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const jwtSecretKey = "SecretKey";

const getAllUsers = async(req,res)=>{
    const allUsers = await usersModel.find();
    res.send(allUsers)
}

const addUsers = async(req,res) => {
    const {name,email,password} = req.body;
    const salt = await bcrypt.genSalt(10);
    const secretPassword = await bcrypt.hash(password,salt);
    try{
      await  usersModel.create({
            name:name,
            email:email,
            password:secretPassword
        })
        res.json({
            status:"success"
        })
    }
    catch(err){
        // console.log(err)
        res.json({
            status:err,
            msg:"Email Exists"
        })
    }
}

const verifyUsers = async(req,res) => {
    const {email,password} = req.body;
    const user = await usersModel.findOne({email});

    try{
        if(!user){
            res.json({
                status:"false",
                msg:"No Account Found"
            })
        } 
        else{
            const chkPass = await bcrypt.compare(password,user.password);
            if(chkPass){
                const data = {
                    user:{
                        id:user.id
                    }
                }
                const authToken = jwt.sign(data,jwtSecretKey);
                res.json({
                    status:"true",
                    users:user,
                    authToken: authToken
                })
            }
            else{
                res.json({
                    status:"false",
                    msg:"Invalid Credentials"
                })
            }
        }
    }
    catch(err){
        req.json({
            error:err
        })
    }
}

module.exports = {
    getAllUsers,
    addUsers,
    verifyUsers
}