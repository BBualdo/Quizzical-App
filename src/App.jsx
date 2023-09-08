import React from 'react'
import Intro from './components/Intro'
import Main from './components/Main'

export default function App() {
  const [page, setPage] = React.useState(
  <Intro 
  changePage={changePage}
  />
  )

  function changePage(selectedDifficulty) {
    setPage(<Main 
    difficulty={selectedDifficulty}
    />)
  }

  return (
    <main>
      {page}
    </main>
  )
}