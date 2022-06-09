import mongoose from "mongoose";

const StudyPlanerSchema = new mongoose.Schema(
    {
        subject: {type:String},
        matters:[
            {  
                lesson: {type:String},
                info: {type:String},
                complete:{type:Boolean, default:false},
                idFire:{type:String}
            }
        ],
        user: {type:String},
        idFire:{type:String,}
    },
    {
        timestamps: true
    }
)

export default mongoose.model('StudyPlaner', StudyPlanerSchema)