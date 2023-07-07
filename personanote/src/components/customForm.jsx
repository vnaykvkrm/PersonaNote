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

        </div>

    </form>
  )
}

export default CustomForm