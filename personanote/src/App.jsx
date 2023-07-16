import React,{useState} from 'react'
import CustomForm from './components/customForm'

function App() {
  const [personas, setPersonas] = useState([]);

  const addPersona = (persona) => {
    setPersonas(prevState=>[...prevState,persona])   // line uses the setPersonas function to update the personas state.
                                                  // It takes the previous state (prevState) and appends the new persona to it. 
                                                  //The syntax [...prevState, persona] creates a new array by spreading the elements
                                                  // of the previous state array and adding the new persona at the end.
  } 
  return (
    <div className="App">
      <header>
        <h1> PERSONA NOTES</h1>
      </header>

      <CustomForm addPersona= {addPersona}/>
      {personas && <PersonaList/>}
    </div>
  )
} 

export default App
