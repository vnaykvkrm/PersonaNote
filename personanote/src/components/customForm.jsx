import React, { useState } from 'react'
import {BeakerIcon} from '@heroicons/react/24/solid'
import '../components/CustomForm.css'

function CustomForm({addPersona}) {

    const[persona,setPersona]=useState("");

    const handleFormSubmit = (e) => {
        e.preventDefault()
        addPersona(
          {
            name: persona,
            completed: false,
            id: Date.now() //This will give the millisecond value of current moment, which is useful as a unique id//
          })
        setPersona('')
    }
  return (
    <form className='persona_note'
    onSubmit={handleFormSubmit}
    >
        <div className="wrapper">
            <input type="text" 
            id='Persona'
            className='input'
            value={persona}
            onInput={(e) => setPersona(e.target.value)}
            required
            autoFocus
            maxLength={60}
            placeholder='Enter a Persona(Persona)'
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