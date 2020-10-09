import React, { useEffect, useState } from "react"
import '../styles/style.scss'

function App() {
  const URL = 'http://5d22b7fd4e05c600146ef4dd.mockapi.io/cupcake/books'
  const [error, setError] = useState(null)
  const [books, setBooks] = useState([])

  useEffect(() => {
    if (!localStorage.getItem('books')) { 
      fetch(URL, {method: 'GET', mode: 'cors', headers: {'Content-Type': 'application/json'}})
        .then(response => response.json())
        .then(response => {
          setBooks(response.books)
          return JSON.stringify(response.books)
        })
        .then(books => {
          localStorage.setItem('books', books)
        })
        .catch(err => {
          setError(err)
        })
    }
  }, [])

  return (
    <div>
      <h1>My React App!</h1>
    </div>
  )
}

export default App