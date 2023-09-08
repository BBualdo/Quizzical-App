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

  function decodeHTML(html) {
    const txt = document.createElement('textarea');
    txt.innerHTML = html;
    return txt.value;
  }

  return (
    <section className='main-page'>
      {questionsData.map((questionData, index) => (
          <div key={index} className='question-container'>
        <p 
        className='question-text' 
        dangerouslySetInnerHTML=
        {{ __html: decodeHTML(questionData.question) }}
        >
        </p>
        <div className='answers'>
          {shuffleAnswers(questionData).map((answer, answerIndex) => (
            <button
             key={answerIndex} 
             className='answer-button'
             dangerouslySetInnerHTML=
             {{ __html: decodeHTML(answer) }}
             >
            </button>
          ))}
        </div>
      </div>
      ))}
      <button className='main-button'>Check answers</button>
    </section>
  )
}

// Function that shuffles the answers
function shuffleAnswers(questionsData) {
  const answers = [questionsData.correct_answer, ...questionsData.incorrect_answers];
  // Randomizing the answers
  for (let i = answers.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [answers[i], answers[j]] = [answers[j], answers[i]]
  }
  return answers
}