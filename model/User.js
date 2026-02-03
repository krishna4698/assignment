import mongoose from "mongoose"

const Userschema =  new mongoose.Schema({
    name:{type:String, requied:true},
    email:{type:String, requied:true},
    password: { type: String, required: true },
    role: {
      type: String,
      enum: ["passenger", "admin"],
    //   default: "passenger",
    }


})
module.exports= mongoose.model("User", Userschema)