import  mongoose from "mongoose";

const UserSchema=new mongoose.Schema({
    Name:{
        type:String,
        required:true

    },
    phone:{
        type:Number,
        required:true

    },
    email:{
        type:String,
        required:true

    },
    
    enquiry:{
        type:String,
        required:true

    },
    details:{
        type:String,
        required:true

    },
    
    createdAt: {
        type: Date,
        default: Date.now,
      },
})
export default mongoose.models.user || mongoose.model("user",UserSchema);