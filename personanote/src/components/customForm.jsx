import React, { useState } from 'react'
import {BeakerIcon} from '@heroicons/react/24/solid'
import '../components/CustomForm.css'

function CustomForm({addTask}) {

    const[task,setTask]=useState("");

    const handleFormSubmit = (e) => {
        e.preventDefault()
        addTask(e)
        setTask('')
    }
  return (
    <form className='persona_note'
    onSubmit={handleFormSubmit}
    >
        <p>{task}</p>
        <div className="wrapper">
            <input type="text" 
            id='task'
            className='input'
            value={task}
            onInput={(e) => setTask(e.target.value)}
            required
            autoFocus
            maxLength={60}
            placeholder='Enter a Persona(task)'
            />

        </div>

        <button
        className='btn'
        aria-label='Add Persona'
        type='submit'
        >
           +
        </button>

    </form>
  )
}

export default CustomForm