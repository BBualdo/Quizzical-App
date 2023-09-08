import React from 'react'

export default function Intro(props) {
  const [selectedDifficulty, setSelectedDifficulty] = React.useState('easy')

  const handleDifficultyChange = (event) => {
    setSelectedDifficulty(event.target.value)
  }

  const startQuiz = () => {
    props.changePage(selectedDifficulty)
  }
  return (
    <section className='intro-page'>
      <h1>Quizzical</h1>
      <p>5 simple (or not) questions.<br /> Can you answer them all?</p>
      <div className='difficulty-container'>
        <p>Choose your difficulty</p>
        <div className='difficulty easy'>
          <input 
          name='difficulty' 
          id='easy' 
          type='radio' 
          value='easy'
          checked={selectedDifficulty === 'easy'}
          onChange={handleDifficultyChange}
          />
          <label htmlFor='easy'><span>Easy</span></label>
        </div>
        <div className='difficulty medium'>
        <input 
          name='difficulty' 
          id='medium' 
          type='radio' 
          value='medium'
          checked={selectedDifficulty === 'medium'}
          onChange={handleDifficultyChange}
          />
          <label htmlFor='medium'><span>Medium</span></label>
        </div>
        <div className='difficulty hard'>
        <input 
          name='difficulty' 
          id='hard' 
          type='radio'
          value='hard'
          checked={selectedDifficulty === 'hard'}
          onChange={handleDifficultyChange}
          />
          <label htmlFor='hard'><span>Hard</span></label>
        </div>
      </div>
      <button className='main-button' onClick={startQuiz}>Start quiz</button>
    </section>
  )
}