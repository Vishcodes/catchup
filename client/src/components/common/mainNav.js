import React from 'react'
import SearchIcon from '@material-ui/icons/Search'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import MenuIcon from '@material-ui/icons/Menu';
import '../../styleSheet/mainNav.css'



function MainNav() {



    return (
        <div className="main-nav">
          <div className="logo">
            <h2 > CATCHUP </h2>
          </div>
          <div className="search">
            <input type="text" placeholder="Search" />
            <span onClick={ e => console.log('clicked') }>
              <SearchIcon />
            </span>
          </div>
          <div className="menu">
            <span onClick={ e => console.log('clicked') }>
              <AccountCircleIcon fontSize="large" />
            </span>
            <span onClick={ e => console.log('clicked') }>
              <MenuIcon fontSize="large" />
            </span>
          </div>
          

        </div>
    )
}

export default MainNav
