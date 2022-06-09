import './study.css'

import Painel from './components/painel'
import { useContext, useState } from 'react'
import { StudyPlanerContext } from '../../shared/services/studyPlanerContext'
import LessonBody from './components/LessonBody'

export default function Study(){
    const {loading, subjects, updateMatter, deleteMatter, removeStudyPlaner} = useContext(StudyPlanerContext)

    const [nameLesson, setNameLesson] = useState('')
    

    if(!subjects[0]){
        return(
            <section className='container'>
                <Painel />
            </section>
        )
    }

    async function handleNewMatter(subject){
        const matter = {
            lesson:nameLesson,
            idFire: JSON.stringify(Math.random()*100*100*100*100*100),
            complete: true
        }

        await updateMatter(matter, subject)
        setNameLesson('')
    }

    return(
        <section className='container-study'>
            <Painel/>
            <div className={loading? 'loading-data-subject' : 'loaded'}></div>
            <div className='card-container'>{
                subjects.map(subject=>
                    <div 
                        className='card'
                        key={subject.idFire}
                    >
                        
                        <h5 className='title'>{subject.subject}</h5>
                       
                        <div className='card-body'>
                            
                        <h6>Assuntos:</h6>
                            {
                                subject.matters.map(matter=>
                                 
                                        
                                    <div className='card-lesson' key={matter.idFire}>
                                        
                                        <div className='card-lesson-header'>
                                            <div className='lesson'>
                                                <button 
                                                    className={`complete-button-${matter.complete}`}
                                                    onClick={()=>updateMatter(matter, subject)}
                                                >{`${matter.complete? 'V' : ''}`}
                                                </button>
                                                <label className={`complete-${matter.complete}`}>{matter.lesson}</label>
                                            </div>
                                            <button 
                                                onClick={()=>deleteMatter(matter, subject)}
                                                className='delete'
                                            >X
                                            </button>
                                        </div>
                                        {matter.complete? '' :( 
                                            <>
                                                <hr></hr>
                                                <LessonBody subject={subject} matter={matter} info={matter.info}/>
                                            </>
                                        )}
                                    </div>
                                    
                                )
                            }
                        </div>
                        
                        <div className='card-lesson-footer'>
                            <h6>Adicionar novo assunto</h6>
                            <div className='card-lesson-footer2'>
                                <input 
                                    type="text" 
                                    onChange={(e)=>{setNameLesson(e.target.value)}}
                                    value={nameLesson}
                                />
                                <button 
                                    onClick={()=>handleNewMatter(subject)}
                                    className='add'
                                >+
                                </button>
                            </div>
                        </div>
                        <button 
                            onClick={()=>removeStudyPlaner(subject.idFire)}
                            className='delete-subject'
                        >X
                        </button>
                    </div>
                )
            }</div>
        </section>
    )
}