import React from 'react'
// import {Link} from 'react-router-dom'

 // import {Link} from 'react-router-dom'
// import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import '../../styleSheet/mainNav.css'



function MainNav() {



    return (
        <div className="main-nav">
        
          <h2 className="logo"> CATCHUP </h2>
          <form>
            <input type="text" placeholder="Search" className="search" ></input>
          </form>
          <img src='../../../images/more.png' alt="name"></img>

        </div>
    )
}

export default MainNav
