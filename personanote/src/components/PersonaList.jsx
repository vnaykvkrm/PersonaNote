import React from 'react'

function PersonaList({personas}) {
  return (
    <ul className={styles.tasks}>
      {personas.map((persona) => {
        <personaItem
          key={persona.id}
          persona={persona}
          />
      })
      }
    </ul>
  )
}

export default PersonaList