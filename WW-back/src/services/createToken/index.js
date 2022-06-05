import jwt from 'jsonwebtoken'
import authConfig from '../../config/auth'

const secret = authConfig.secret
const expiresIn = authConfig.expiresIn

export const generateToken = async (userExiste) => { 
    return jwt.sign({id: userExiste._id, ADM:userExiste.ADM}, secret, {expiresIn: expiresIn})
}
