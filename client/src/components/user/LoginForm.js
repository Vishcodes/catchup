import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { withRouter } from 'react-router-dom'
import { loginUser } from '../../redux/actions/authAction'
import '../../app.css'

class Login extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            email: '',
            password: '',
            errMsg: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange(e){
        e.persist()
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit(e){
        e.preventDefault()
        const formData = {
            email: this.state.email,
            password: this.state.password
        }
        this.props.loginUser(formData,this.props.history)
    }

    render(){
        return(
            
            <form onSubmit={this.handleSubmit} className="loginform">
                <div className="logInput">
                    <label>
                        Email
                        <input type='email' value={this.state.email} onChange={this.handleChange} name='email'></input>
                    </label>
                    <label>
                        Password
                        <input type='password' value={this.state.password} onChange={this.handleChange} name='password'></input>
                    </label>
                </div>
                <input type='submit' value='Login' className="loginButton"></input>
            </form>
        )
    }
}

Login.propTypes = {
    loginUser: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    user: state.user
})

export default connect(mapStateToProps, {loginUser})(withRouter(Login))
