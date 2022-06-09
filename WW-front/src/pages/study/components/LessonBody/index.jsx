import './lessonBody.css'

import { useContext, useState } from "react"
import { StudyPlanerContext } from "../../../../shared/services/studyPlanerContext"

export default function LessonBody(props){
    const {updateMatter} = useContext(StudyPlanerContext)

    const [info, setInfo] = useState('')

    async function handleUpdateMatter(){
        const matter = {
            lesson:props.matter.lesson,
            complete: !props.matter.complete,
            info: info,
            idFire: props.matter.idFire,
            _id: props.matter._id
        }

        await updateMatter(matter, props.subject)
        setInfo('')
    }

    return(
        <div key={props.matter.idFire} className="body-info">
            {props.info? (
                <div className='lesson-card'>
                    <h6>Considerações</h6>
                    <hr></hr>
                    <p>{props.info}</p>
                </div>
            ) : '' }
            <div className='form'>
            <input placeholder="Considerações" onChange={(e)=>{setInfo(e.target.value)}} value={info}></input>
            <button onClick={()=>{handleUpdateMatter()}}>Adicionar/ substituir consideração</button>
            </div>
        </div>
    )
}