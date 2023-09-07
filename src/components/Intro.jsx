import React from 'react'

export default function Intro(props) {
  return (
    <section className='intro-page'>
      <h1>Quizzical</h1>
      <p>5 simple (or not) questions.<br /> Can you answer them all?</p>
      <button className='main-button' onClick={props.changePage}>Start quiz</button>
    </section>
  )
}