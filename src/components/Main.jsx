import React from 'react'

export default function Main() {
  const [questionsData, setQuestionsData] = React.useState([])

  React.useEffect(() => {
    (async function getQuestions() {
      const res = await fetch("https://opentdb.com/api.php?amount=5");
      const data = await res.json()
      setQuestionsData(data.results)
    })()
  }, [])

  console.log(questionsData)
  const questions = questionsData.map(element => {
    return element.question
  })

  const answers = questionsData.map(element => {
    return [element.correct_answer, ...element.incorrect_answers]
  })

  console.log(questions)
  console.log(answers)

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