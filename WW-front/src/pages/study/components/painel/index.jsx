import './painel.css'

import { useContext, useState } from "react"
import { StudyPlanerContext } from '../../../../shared/services/studyPlanerContext'

export default function Painel(){
    const [isActive, setIsActive] = useState(false)
    const [change, setChange] = useState(false)
    
    const [nameSubject, setNameSubject] = useState('')
    const [nameLesson, setNameLesson] = useState('')
   
    const [lessons, setLessons] = useState([])

    const {packStudyPlaner} = useContext(StudyPlanerContext)
  
    function mattersPack(){

        if(!nameLesson){
            return alert('preencha o assunto')
        }else{
            let lesson = {
                lesson:nameLesson,
                idFire: JSON.stringify(Math.random()*100*100*100*100*100),
                complete: false
            }
            setLessons([...lessons, lesson])
            setNameLesson('')
            setChange(true)
        }
    }

    async function handleCreateStudyPlaner(){

        await packStudyPlaner(nameSubject, lessons)
        
        setChange(false)
        setIsActive(false)
        setLessons([])
        setNameLesson('')
        setNameSubject('')       
    }
  
    return(
        <div className='painel-container'>
            <div className={`painel ${isActive? 'inactive' : 'active'}`} >
                <button 
                    className='add-subject'
                    onClick={()=> {setIsActive(!isActive)}}    
                >+
                </button>
                <h6 className='title'>Adicionar matéria</h6>
            </div>
            <div className={`form-subject ${isActive? 'active' : 'inactive'}`}>
                <button 
                    className='close-subject'
                    onClick={()=>{
                        setIsActive(!isActive)
                        setNameLesson('')
                        setNameSubject('')
                        setLessons([])
                    }}
                >X
                </button>
                <div className='subject-inputs'>
                    <div className='input'>
                        <label htmlFor="subject">Matéria</label>
                        <input 
                            type="text" 
                            name="subject" 
                            id="subject" 
                            placeholder='Adicione a matéria a ser estudada'
                            onChange={(e)=>setNameSubject(e.target.value)}
                            value={nameSubject}
                        />
                    </div>
                    {
                        lessons.map(lesson=>
                            <div className="lesson" key={lesson.idFire}>
                                {lesson.lesson}
                            </div>
                        )
                    }
                    <hr />
                    <div className='painel-matter'>
                        <button 
                            className='add-matter'
                            onClick={mattersPack}    
                        >+
                        </button>
                        <h6>Atribuir esse assunto à matéria</h6>
                    </div>
                    <div className='input'>
                        <input 
                            type="text" 
                            name="lesson" 
                            id="lesson" 
                            placeholder='Adicione um assunto e atribua apertando o botão acima'
                            onChange={(e)=>setNameLesson(e.target.value)}
                            value={nameLesson}
                        />
                    </div>
                    <button 
                        className={`finish-button ${change? '' : 'hidden'}`}
                        onClick={handleCreateStudyPlaner}
                    >ADICIONAR
                    </button>
                </div>
            </div>
        </div>
    )
}