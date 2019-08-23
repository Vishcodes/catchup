import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
// import _ from 'lodash'
import Main from './components/user/mainReg'
import ListPost from './components/user/home'
import Login from './components/user/LoginForm'
import Register from './components/user/RegistrationForm';
import Account from './components/user/Account'
// import MainNav from './components/common/mainNav'
// import './app.css'


function App() {
  return (
    <BrowserRouter>
      <div className="App">   

            <Switch>
              <Route path='/' component={Main} exact/>
              <Route path='/catchup/home' component={ListPost} exact/>
              <Route path='/catchup/login' component={Login} exact/>
              <Route path='/catchup/register' component={Register} exact/>
              <Route path='/catchup/account' component={Account} exact />
              
            </Switch>
          
      </div>

      
    </BrowserRouter>
  )
}

export default App;
