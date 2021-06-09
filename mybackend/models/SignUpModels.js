const mongoose=require('mongoose')
const bcrypt=require('bcryptjs')
const jwt =require('jsonwebtoken')


const SignUpTemplate=new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    id:{
        type:String,
        required:true
    },
    
})
SignUpTemplate.pre('save',async function (next) {
    
    if(this.isModified('password')){
        this.password=await bcrypt.hash(this.password,10);
    }
    next();
});

const User=mongoose.model('user',SignUpTemplate)
module.exports=User