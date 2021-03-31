import React from 'react'
import MFHeader from './components/fix/MFHeader'
import MFFooter from './components/fix/MFFooter'
import { BrowserRouter as Router} from 'react-router-dom'
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
          <MFFooter />
        </Router>
      </div>
  );
}

export default App;
