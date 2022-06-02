import jwt from "jsonwebtoken"

import authConfig from "../config/auth"

export default async (req, res, next) =>{
    const authenticated = true

    if(authenticated){
        return next()
    }else{
        res.status(401).json()
    }
}