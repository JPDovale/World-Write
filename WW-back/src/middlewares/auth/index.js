import jwt from "jsonwebtoken"
import authConfig from "../../config/auth"

export const auth = async (req, res, next) =>{
    const authHeader = req.headers.authorization

    if(!authHeader){
        return res.status(400).json({msg: 'token não recebido'})
    }

    const[, token] = authHeader.split(' ')

    try {
        jwt.verify(token, authConfig.secret)

        return next()
    } catch (error) {
        console.log(error)
        return res.status(400).json({msg: 'Token invalido'})
    }
}

export const adm = async (req, res, next) => {
    const authHeader = req.headers.authorization
    const[, token] = authHeader.split(' ')

    const decoded = jwt.decode(token)

    if(decoded.ADM === true){
        next()
    }else(
        res.status(401).json({msg: 'acesso negado'})
    )

}