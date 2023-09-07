import React from 'react'

export default function Main() {
  return (
    <section className='main-page'>
      <div className='question-container'>
        <p className='question-text'>How would one say goodbye in Spanish?</p>
        <div className='answers'>
          <button className='answer-button'>Adiós</button>
          <button className='answer-button'>Hola</button>
          <button className='answer-button'>Au Revoir</button>
          <button className='answer-button'>Salir</button>
        </div>
      </div>
      <button className='main-button'>Check answers</button>
    </section>
  )
}