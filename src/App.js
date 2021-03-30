import React from 'react'
import MFHeader from './components/fix/MFHeader'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'
import 'materialize-css'
import MFRouter from './components/MFRouter'


function App() {
  return (
      <div className="App">
        <Router>
          <MFHeader />
                  <div className="app-content-area">
                    <MFRouter />
                  </div>
           </Router>
      </div>
  );
}

export default App;
