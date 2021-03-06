import User from '../../models/User'

import {db} from '../../database/firestore'
import { generateToken } from '../../services/createToken'
import { createPasswordHash, comparePassword  } from '../../services/passwordEncrypt'

class UserController {
    
    async register(req, res){
        const {name, email, password} = req.body
        const userExiste = await User.findOne({email:email})

        if(userExiste){
            return(res.json({msg: 'Usuário já existente, tente fazer login'}))
        }
        else{
            const encryptedPassword = await createPasswordHash(password)

            const registerUser = new User({ 
                name, 
                email, 
                password: encryptedPassword
            })

            if(!name || !email || !password ){
                res.status(400).json({msg: 'Dados não recebidos devidamente'})
            }else{

                const userFire = {
                    name: registerUser._doc.name,
                    email: registerUser._doc.email,
                    password: registerUser._doc.password,
                    ADM: registerUser._doc.ADM,
                    idFire: registerUser._doc.idFire,
                }

                try {
                    const user = await registerUser.save()
                    res.status(200).send(user)
                    db.collection('users').doc(userFire.idFire).set(userFire)
                } catch (error) {
                    res.status(400).json({msg: 'algo deu errado'})
                    console.log(error)
                }
            }
        }        
    }

    async login(req, res) {
        const {email, password} = req.body
        const userExiste = await User.findOne({email:email})

        if(!userExiste){
            return(res.json({msg: 'Email ou senha incorreto'}))
        }

        const matchEmailAndPassword = await comparePassword(password, userExiste.password)

        if(!matchEmailAndPassword){
            return(res.json({msg: 'Email ou senha incorreto'}))
        }

        const token = await generateToken(userExiste)

    res.status(200).json({user:userExiste, authorization: token})
    }
}

export default new UserController()