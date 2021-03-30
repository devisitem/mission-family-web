import React from 'react'
import MFHeader from './components/fix/MFHeader'
import MainPage from './components/view/Mainpage'
import LoginPage from './components/view/LoginPage'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'
import 'materialize-css'


function App() {
  return (
      
      <div className="App">
        <Router>
          <MFHeader />
              <div className="app-content-area">
                <Switch>
                  <Route exact path="/" component={ MainPage } />
                  <Route path="/login" component={ LoginPage } />
                </Switch>
              </div>
           </Router>
      </div>
  );
}

export default App;
