import jwt from 'jsonwebtoken'
import authConfig from '../../config/auth'

const secret = authConfig.secret
const expiresIn = authConfig.expiresIn

export const generateToken = async (userExiste) => { 
    return jwt.sign({idFire: userExiste.idFire}, secret, {expiresIn: expiresIn})
}
