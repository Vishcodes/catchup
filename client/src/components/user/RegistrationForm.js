import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import '../../app.css'

import Input from '../common/input'
import Button from '../common/button'
import {registerNewUser} from '../../redux/actions/authAction'

class Register extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            username: '',
            email: '',
            password: ''
        }
    }
    handleChange = e => {
        e.persist()
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit = e => {
        e.preventDefault()
        const formData = {
            username: this.state.username,
            email: this.state.email,
            password: this.state.password

        }
        this.props.registerNewUser(formData,this.props.history)
    }

    render(){
        return(
            <div className="card">
                <h2>Register</h2>
                <form onSubmit={this.handleSubmit}>
                    <Input
                        type="text" 
                        name="username" 
                        value={this.state.username}
                        onChange={this.handleChange} 
                        placeholder="Username"
                    />
                    <br/>
                    <Input 
                        type='email' 
                        value={this.state.email} 
                        onChange={this.handleChange} 
                        name='email' 
                        placeholder="Email"
                    />
                    <br/>
                    <Input 
                        type='password' 
                        value={this.state.password} 
                        onChange={this.handleChange} 
                        name='password' 
                        placeholder="Password"
                    />
                    <br/>
                    <Button type='submit' text='Register' />
                </form>
            </div>
        ) 
    }    
    
}

Register.propTypes = {
    registerNewUser: PropTypes.func.isRequired
}
const mapStateToProps = state => ({
    errors: state.errors  
})


export default connect(mapStateToProps, {registerNewUser})(withRouter(Register))