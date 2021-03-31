import React from 'react'
import MainPage from './view/Mainpage'
import LoginPage from './view/LoginPage'
import RegisterPage from './view/RegisterPage'
import FindAccountPage from './view/FindAccountPage.js'
import CreateMission from './view/mission/CreateMission'
import CreateFamily from './view/family/CreateFamily'
import FindUser from './view/family/FindUser'
import { Switch, Route } from 'react-router-dom'

const MFRouter = (props) => {
    return(
        <Switch>
            <Route exact path="/" component={ MainPage } />
            <Route path="/login" component={ LoginPage } />
            <Route path="/register" component={ RegisterPage } />
            <Route path="/findAccount" component={ FindAccountPage } />
            <Route path="/createMission" component={ CreateMission } />
            <Route path="/createFamily" component={ CreateFamily } />
            <Route path="/findUser" component={ FindUser } />
        </Switch>
    )
}

export default MFRouter