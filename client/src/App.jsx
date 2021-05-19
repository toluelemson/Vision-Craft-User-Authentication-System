import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import LoginScreen from './views/Login.screen';
import RegisterScreen from './views/Register.screen';
import Dashboard from './views/Dashboard';

function App() {
  return (
    <div className="App">
      <Router>
        <main className="py-3">
          <Route exact path="/" component={LoginScreen} />
          <Route path="/register" component={RegisterScreen} />
          <Route path="/dashboard" component={Dashboard} />
        </main>
      </Router>
    </div>
  );
}

export default App;
