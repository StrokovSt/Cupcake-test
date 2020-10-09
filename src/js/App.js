import React, { useEffect, useState } from "react"
import {BrowserRouter} from 'react-router-dom';
import {useRoutes} from './routes';
import '../styles/style.scss'

import {Switch, Route, Redirect} from 'react-router-dom'

function App() {
  const URL = 'http://5d22b7fd4e05c600146ef4dd.mockapi.io/cupcake/books'
  const routes = useRoutes();
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
    <BrowserRouter>
      <header>
        <a href="/">Main</a>
        <a href="/cart">Cart</a>
        {routes}
      </header>
    </BrowserRouter>
  )
}

export default App