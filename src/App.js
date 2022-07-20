import React from 'react'
import { BrowserRouter, Route,Routes } from 'react-router-dom'
import Home from './components/Home';
import Quiz from './components/Quiz'
import './App.css'





const App = () => {
  return (
    
     <>
     
    <BrowserRouter>
   
       <Routes>
       
       <Route index element={<Home />} />
          <Route exact path="/quiz" element={<Quiz />} /> 

       </Routes>
  
    
    
    
   </BrowserRouter> 

    

      
     </>
   )
}

export default App