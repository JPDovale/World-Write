import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        name: {type:String, required:true, minlenght:3, maxlenght:40},
        email: {type:String, required:true, minlenght:6, maxlenght:100},
        password: {type:String, required:true, minlenght:8, maxlenght:30},
        ADM: {type:Boolean, default:false},
        projects: [],
        todo: [],
    },
    {
        timestamps: true
    }
)

export default mongoose.model('User', userSchema) 