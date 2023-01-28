const mongoose=require('mongoose');
const authSchema=new mongoose.Schema({
    name:{type:"string",required:true},
    email:{type:"string",required:true},
    password:{type:"string",required:true}
})
const auth_model=mongoose.model("auth",authSchema);
module.exports={auth_model}