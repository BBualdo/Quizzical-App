import React from 'react'

export default function App() {
  fetch("https://opentdb.com/api.php?amount=5")
    .then(res => res.json())
    .then(data => console.log(data))
}