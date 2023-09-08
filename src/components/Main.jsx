import React from 'react'

export default function Main() {
  const [questionsData, setQuestionsData] = React.useState([])
  const [selectedAnswers, setSelectedAnswer] = React.useState({})
  const [answersChecked, setAnswersChecked] = React.useState(false)
  const [correctAnswersCount, setCorrectAnswersCount] = React.useState(0)

  React.useEffect(() => {
    fetchQuestions();
  }, [])

  const fetchQuestions = async () => {
    const res = await fetch("https://opentdb.com/api.php?amount=5");
    const data = await res.json()
    // Shuffle answers once
    const shuffledQuestions = data.results.map(questionData => ({
      ...questionData,
      answers: shuffleAnswers(questionData)
    }))
    setQuestionsData(shuffledQuestions);
    setSelectedAnswer({});
    setAnswersChecked(false);
    setCorrectAnswersCount(0);
  }

  function decodeHTML(html) {
    const txt = document.createElement('textarea');
    txt.innerHTML = html;
    return txt.value;
  }

  function selectAnswer(questionIndex, answer) {
    setSelectedAnswer({...selectedAnswers, [questionIndex]: answer})
  }

  function checkAnswers() {
    let count = 0
    for (let i = 0; i < questionsData.length; i++) {
      if (selectedAnswers[i] === questionsData[i].correct_answer) {
        count++
      } 
    }
    setAnswersChecked(true)
    setCorrectAnswersCount(count)
  }

  function resetQuiz() {
    fetchQuestions();
  }

  return (
    <section className='main-page'>
      <div className='quiz-container'>
        {questionsData.map((questionData, index) => (
            <div key={index} className='question-container'>
          <p 
          className='question-text' 
          dangerouslySetInnerHTML=
          {{ __html: decodeHTML(questionData.question) }}
          >
          </p>
          <div className='answers'>
            {questionData.answers.map((answer, answerIndex) => (
              <button
              key={answerIndex} 
              className={`answer-button ${
                !answersChecked && selectedAnswers[index] === answer 
                    ? 'selected' 
                    : answersChecked && answer === questionData.correct_answer 
                    ? 'correct-answer' 
                    : answersChecked && selectedAnswers[index] === answer
                    ? 'incorrect-answer'
                    : answersChecked
                    ? 'checked'
                    : ''
                }`}
              dangerouslySetInnerHTML={{ 
              __html: decodeHTML(answer) 
              }}
              onClick={() => !answersChecked && selectAnswer(index, answer)}
              // Disable button when answersChecked is true
              disabled={answersChecked}
              ></button>
            ))}
          </div>
        </div>
        ))}
      </div>
      {!answersChecked && 
      <button 
      className='main-button'
      onClick={checkAnswers}
      >Check answers
      </button>}
      {answersChecked && 
      <div className='result-container'>
        <p className='result'>
          {`You scored ${correctAnswersCount}/${questionsData.length} correct answers`}
        </p>
        <button 
        className='main-button'
        onClick={resetQuiz}
        >Play again</button>
      </div>}
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