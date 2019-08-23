import React from 'react'
import _ from 'lodash' 
import Login from './LoginForm'
import Register from './RegistrationForm'
import ListPost from './home'


function Main(){
    return(
        <div className="Main">
            {
            !_.isEmpty(localStorage.getItem('user-auth')) ? (
              <div>
                <ListPost/>
              </div>
            ) : (
              <div>
                <Login/>
                 <Register/> 
              </div>
            )}
               
        </div>
    )
}
export default Main