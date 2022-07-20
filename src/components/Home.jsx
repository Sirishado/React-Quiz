import React  from 'react'
// import { NavLink } from 'react-router-dom'
// import {Howl} from 'howler';
// import KbcBackground from '../music/KbcBackground.mp3'
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const his=useNavigate()
    const startQuiz=()=>{
        his("/quiz")
        

    }
    
    

    return (
        <>
            <div className="home">

                {/* <NavLink to="/quiz" className="btn btn-primary">Start Quiz</NavLink> */}
                <button className="btn btn-primary" onClick={startQuiz}>Start Quiz</button>

            </div>
            
        </>
    )
}

export default Home