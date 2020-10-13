import React from "react"
import {BrowserRouter} from 'react-router-dom'
import {useRoutes} from './routes'
import {NavigationComponent} from './components/navigationComponent'
import '../styles/style.scss'

function App() {
  const routes = useRoutes();

  return (
    <BrowserRouter>
      <header className="header">
        <NavigationComponent />
      </header>
      {routes}
    </BrowserRouter>
  )
}

export default App