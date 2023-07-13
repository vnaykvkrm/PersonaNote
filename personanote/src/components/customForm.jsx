import React from 'react'
import {BeakerIcon} from '@heroicons/react/24/solid'

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

        <button
        className='btn'
        aria-label='Add Persona'
        type='submit'
        >
            <BeakerIcon className='h-6 w-6 text-blue-500'/>
        </button>

    </form>
  )
}

export default CustomForm