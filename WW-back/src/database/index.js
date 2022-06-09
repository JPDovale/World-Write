import mongoose from "mongoose";

import  config  from "../config/database";


class Database {
    constructor(){
        this.connection = mongoose.connect(
            config.urlMongo,
        ).then(()=>{
            console.log("mongo DB connected")
        }).catch((err)=>{
            console.log(err)
        })
        
    }
}

export default new Database()