import { createContext, useContext, useEffect, useState } from "react";
import { addStudyPlaner, deleteStudyPlaner, getStudyPlaner, updateMatterStudyPlaner } from "../../api";

import {AuthContext} from '../authContext'

export const StudyPlanerContext = createContext()

export function StudyPlanerProvider({children}){

    const {user} = useContext(AuthContext)

    const [loading, setLoading] = useState(true)
    const [subjects, setSubjects] = useState([])
    const [subject, setSubject] = useState({})

    useEffect(()=>{
        (async()=>{
            setLoading(true)
            if(user){
                const reqSubjects = await getStudyPlaner(user.idFire).catch(setLoading(false))
                setSubjects(reqSubjects.data)
                setLoading(false)
            }
            setLoading(false)
            
        })()
    },[user])

    async function packStudyPlaner(nameSubject, lessons){
        const subjectPack = {
            subject: nameSubject,
            matters: lessons.map(lesson=>{return {lesson:lesson.lesson, idFire:lesson.idFire, complete:lesson.complete}}),
        }
        await addStudyPlaner(subjectPack, user.idFire)
        getPlaners()
    }

    async function getPlaners(){
        const reqSubjects = await getStudyPlaner(user.idFire)
        setSubjects(reqSubjects.data)
        setLoading(false)
    }

    async function removeStudyPlaner(idFire){
        await deleteStudyPlaner(idFire)
        getPlaners()
    }

    async function updateMatter(matter, subject){
        const updateMatter = {
            lesson: matter.lesson,
            complete: !matter.complete,
            info: matter.info,
            idFire:matter.idFire,
            _id: matter._id
        }

        const filtrateMatters = subject.matters.filter(mat=>  mat.idFire !== matter.idFire)

        const updatedSubjectPack = {
            subject: subject.subject,
            matters:[
                ...filtrateMatters,
                updateMatter
            ]
        }

        await updateMatterStudyPlaner(subject.idFire, updatedSubjectPack)
        getPlaners()
    }

    async function deleteMatter(matter, subject){
        const filtrateMatters = subject.matters.filter(mat=>  mat.idFire !== matter.idFire)

        const updatedSubjectPack = {
            subject: subject.subject,
            matters:[
                ...filtrateMatters,
            ]
        }

        await updateMatterStudyPlaner(subject.idFire, updatedSubjectPack)
        getPlaners()
    }

    async function getMatter(idFire){
        await getPlaners()
        const matter = subjects.filter(sub=> sub.idFire === idFire)
        setSubject(...matter)
    }
    
    return(
        <StudyPlanerContext.Provider
            value={{
                loading, 
                subjects, 
                subject, 
                
                setLoading,
                packStudyPlaner, 
                removeStudyPlaner, 
                updateMatter, 
                deleteMatter, 
                getMatter
            }}
        >
            {children}
        </StudyPlanerContext.Provider>
    )
}