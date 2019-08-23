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
            <React.Fragment>
                <div className="loginform">
                    <h2 className="logo"> CATCHUP </h2>
                    <form onSubmit={this.handleSubmit} >
                        <div className="logInput">
                            <input type='email' value={this.state.email} onChange={this.handleChange} name='email' placeholder='Email'></input>
                            <input type='password' value={this.state.password} onChange={this.handleChange} name='password' placeholder='Password'></input>
                            <button type='submit' className="loginButton">Login</button>

                        </div>
                    </form>
                </div>
            </React.Fragment>
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
