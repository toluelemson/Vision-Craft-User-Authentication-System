import React, { ReactElement } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import AppRoutes from './routes'

function App(): ReactElement {
  return (
    <div className="App">
      <Router>
        <Route component={AppRoutes} />
      </Router>
    </div>
  )
}

export default App
