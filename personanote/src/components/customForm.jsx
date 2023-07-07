import React from 'react'

function CustomForm() {

    const handleFormSubmit = (e) => {
        e.preventDefault()
        console.log('Form submitted')
    }
  return (
    <form className='persona_note'
    onSubmit={handleFormSubmit}
    >
        <div className="wrapper">
            <input type="text" 
            id='task'
            className='input'
            //value={task}
            //onInput={(e) => setTask(e.target.value)}
            required
            autoFocus
            maxLength={60}
            placeholder='Enter a Persona(task)'
            />
            <label htmlFor="task" 
            className='label'>
                Enter Persona
            </label>

        </div>

    </form>
  )
}

export default CustomForm