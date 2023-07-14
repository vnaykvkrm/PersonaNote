import React,{useState} from 'react'
import CustomForm from './components/customForm'

function App() {
  const [count, setCount] = useState(0)

  const addPersona = (persona) => {
    console.log(persona)
  }
  return (
    <div className="App">
      <header>
        <h1> PERSONA NOTES</h1>
      </header>

      <CustomForm addPersona= {addPersona}/>
    </div>
  )
}

export default App
