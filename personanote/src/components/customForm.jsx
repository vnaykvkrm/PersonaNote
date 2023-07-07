import React from 'react'

function customForm() {

    const handleFormSubmit = (e) => {
        e.preventDefault()
        console.log('Form submitted')
    }
  return (
    <form className='persona_note'
    onSubmit={handleFormSubmit}
    >

    </form>
  )
}

export default customForm