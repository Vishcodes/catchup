import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Main from './components/user/mainReg'
import ListPost from './components/user/home'
import ListUser from './components/user/userList'
import Account from './components/user/Account'
import Friends from './components/user/Friends'
import FriendReq from './components/user/FriendReq'


function App() {
  return (
    <BrowserRouter>
      <div className="App">   
            <Switch>
              <Route path='/' component={Main} exact/> 
              <Route path='/catchup' component={Main} exact/>
              <Route path='/catchup/home' component={ListPost} exact/>
              <Route path='/catchup/users' component={ListUser} exact />
              <Route path='/catchup/account' component={Account} exact />
              <Route path='/catchup/friends' component={Friends} exact />
              <Route path='/catchup/friendreq' component={FriendReq} exact />
            </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App;
