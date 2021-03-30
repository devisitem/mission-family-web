import React from 'react'
import MainPage from './view/Mainpage'
import LoginPage from './view/LoginPage'
import RegisterPage from './view/RegisterPage'
import FindAccountPage from './view/FindAccountPage.js'
import { Switch, Route } from 'react-router-dom'

const MFRouter = (props) => {
    return(
        <Switch>
            <Route exact path="/" component={ MainPage } />
            <Route path="/login" component={ LoginPage } />
            <Route path="/register" component={ RegisterPage } />
            <Route path="/findAccount" component={ FindAccountPage } />
        </Switch>
    )
}

export default MFRouter