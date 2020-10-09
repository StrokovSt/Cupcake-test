import React from "react"
import {BrowserRouter} from 'react-router-dom'
import {useRoutes} from './routes'
import '../styles/style.scss'

function App() {
  const routes = useRoutes();

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