import React from 'react'
import CustomForm from './components/customForm'

function App() {
  const [count, setCount] = useState(0)

  const addTask = (task) => {
    console.log(task)
  }
  return (
    <div className="App">
      <header>
        <h1> PERSONA NOTES</h1>
      </header>

      <CustomForm addTask= {addTask}/>
    </div>
  )
}

export default App
