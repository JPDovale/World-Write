import User from '../../models/User'
import { generateToken } from '../../services/createToken'
import { createPasswordHash, comparePassword  } from '../../services/passwordEncrypt'

class UserController {
    
    async register(req, res){
        const {name, email, password} = req.body
        const userExiste = await User.findOne({email:email})

        if(userExiste){
            return(res.json({msg: 'Usuário já existente'}))
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
                try {
                    const user = await registerUser.save()
                    res.status(200).send(user)
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