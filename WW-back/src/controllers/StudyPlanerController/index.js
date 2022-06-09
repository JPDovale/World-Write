import StudyPlaner from "../../models/StudyPlaner"
import User from "../../models/User"

import {db} from '../../database/firestore'

class StudyPlanerController {
    async new(req, res){

        let userExiste = await User.findOne({
            idFire: req.params._id
        })

        if(!userExiste){
            const userRef = db
                .collection('users')
                .doc(req.params._id)

            const userExisteInFirebase =  await userRef
                .get()
                .then((doc)=>doc.data())

            if(!userExisteInFirebase){ 
                return res.status(404).json({
                    msg: 'nenhum usuário encontrado'
                })
            }

            userExiste = userExisteInFirebase
        }

        let planerThisUser = await StudyPlaner.find({
            user: userExiste.idFire
        })

        if(!planerThisUser[0]){
            await db
                .collection('studyplaners')
                .where('user', '==', `${userExiste.idFire}`)
                .get()
                .then(snapshot=>{
                    snapshot.forEach((doc)=>{
                        let thisPlaner = doc.data()
                        planerThisUser.push(thisPlaner)
                    })}
                )
        }

        const planerExiste = planerThisUser.filter(it=>{
            return it.subject === req.body.subject
        })

        if(planerExiste[0]) return res.status(402).json({msg: "A materia já existe"})

        const studyPlanerPack = {
            ...req.body, 
            user:userExiste.idFire, 
            idFire: JSON.stringify(Math.random()*100*100*100*100*100)
        }

        try {
            const studyPlaner = await new StudyPlaner(studyPlanerPack)
            const planerSave = await studyPlaner.save()
            await db.
                collection('studyplaners')
                .doc(studyPlanerPack.idFire)
                .set(studyPlanerPack)

            res.status(200).send(planerSave)
        } catch (err) {
            res.status(500).json({
                msg: "houve algum erro com o servidor, tente novamente mais tarde"
            })
        }
        
    }

    async remove(req, res){
        const planerExiste = await StudyPlaner.findOne({
            idFire: req.params._id
        })

        if(!planerExiste) return res.status(404).json({
            msg: 'esse plano não existe'
        })

        try {
            await StudyPlaner.findOneAndDelete({
                idFire: req.params._id
            })

            await db
                .collection('studyplaners')
                .doc(req.params._id)
                .delete()

            res.status(200).json({
                msg:'deletado com sucesso'
            })
        } catch (err) {
            res.status(500).json({
                msg: "houve algum erro com o servidor, tente novamente mais tarde"
            })
        }
    }

    async update(req, res){
        const planerExiste = await StudyPlaner.findOne({
            idFire: req.params._id
        })
        const planerRef = db
            .collection('studyplaners')
            .doc(req.params._id)
        const planerExisteInFirebase = await planerRef
            .get()
            .then((doc)=>doc.data())

        if(!planerExiste || !planerExisteInFirebase) return res.status(404).json({
            msg: 'esse plano não existe'
        })

        const studyPlanerPack = {...req.body}

        try {
            await StudyPlaner.findOneAndUpdate({
                idFire: req.params._id
            }, 
            {
                $set:studyPlanerPack
            })

            await db
                .collection('studyplaners')
                .doc(req.params._id)
                .update(studyPlanerPack)

            res.status(200).json({
                msg: "objeto renovado"
            })
        } catch (err) {
            res.status(500).json({
                msg: "houve algum erro com o servidor, tente novamente mais tarde"
            })
        }
    }

    async getAll(req, res){
        let userExiste = await User.findOne({
            idFire: req.params._id
        })

        if(!userExiste){
            const userRef = db
                .collection('users')
                .doc(req.params._id)

            const userExisteInFirebase = await userRef
                .get()
                .then((doc)=>doc.data())

            if(!userExisteInFirebase) return res.status(404).json({
                msg: 'nenhum usuário encontrado'
            })

            userExiste = userExisteInFirebase
        }

        let planerThisUser = await StudyPlaner.find({
            user: userExiste.idFire
        })

        if(!planerThisUser[0]){
            await db
                .collection('studyplaners')
                .where('user', '==', `${userExiste.idFire}`)
                .get()
                .then(snapshot=>{
                    snapshot.forEach((doc)=>{
                        let thisPlaner = doc.data()
                        planerThisUser.push(thisPlaner)
                    })
                })
        }

        if(planerThisUser[0]){
            res.status(200).send(planerThisUser)
        }else{
            res.status(200).json({
                msg: "nenhum planer existente"
            })
        }
    }

}

export default new StudyPlanerController()