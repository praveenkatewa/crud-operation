const mongoose=require("mongoose")
const userSchema=new mongoose.Schema(
    {
        name:{
            type:String,
            require:true
        },
        email:{
            type:String,
            require:true,
            unique:true
        },


    },
    {timestamps:true,versionKey:false}

)

module.exports=mongoose.model("user",userSchema)