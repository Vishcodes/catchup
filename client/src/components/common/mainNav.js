import React from 'react'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'
import SearchIcon from '@material-ui/icons/Search'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import MenuIcon from '@material-ui/icons/Menu'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import '../../styleSheet/mainNav.css'
import {logoutUser} from '../../redux/actions/authAction'
import { startSetUserList } from '../../redux/actions/userAction'

class MainNav extends React.Component{
  constructor(){
    super()
    this.state={
      name: '',
      users: []
    }
  }

  handleChange = e =>{
    this.setState({
       name: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    const name = this.state.name
    this.props.startSetUserList(name,this.props.history)
  }

  handleLogout = () => {
    this.props.logoutUser(this.props.history)
  }

    render(){
      return (
          <div className="main-nav">
            <div className="logo">
              <h2><Link to="/catchup/home"> CATCHUP </Link></h2>
            </div>
              <div className="search">
                  <form onSubmit={ this.handleSubmit }>
                    <input type="text" placeholder="Search" onChange={ this.handleChange } />
                    <button type="submit">
                      <SearchIcon/>
                    </button>
                  </form>
              </div>
            <div className="menu">
              <span onClick={ e => console.log('clicked') }>
                <AccountCircleIcon fontSize="large" />
              </span>
              <span onClick={ e => console.log('clicked') }>
                <MenuIcon fontSize="large" />
              </span>
              <span onClick={ this.handleLogout }>
                <ExitToAppIcon fontSize="large" />
              </span>
            </div>
          </div>
      )
    }
}

const mapStateToProps = state => ({
  user: state.user
})

export default connect(mapStateToProps, {logoutUser, startSetUserList})(withRouter(MainNav))
