import React, {Component} from 'react';
import {connect} from 'react-redux';
import axios from 'axios'

class Login extends {Component} {

    constructor(){
        super()
        this.state ={
            username: '',
            password:''
        }
    }

    handleTextBoxChange = (e) =>{
        this.setState({
        [e.target.name]: e.target.value
    })
}

handleLoginClick = () => {
    axios.post('http://localhost:8080/login', {
        username:this.state.username,
        password:this.state.password
    }).then(response => {
        let token = response.data.token
        console.log(token)
        localStorage.setItem('jsonwebtoken', token)
        //update redux
        this.props.onAuthenticated(token)
        setAuthenticationHeader(token)
    }).catch(error => console.log(error))

}


render(){
    return(
        <div>
            <input name="username" onChange={this.handleTextBoxChange} placeholder="username"></input>
            <input name="password" onChange={this.handleTextBoxChange} placeholder="password"></input>
            <button onClick={this.handleLoginClick}>Login</button>
        </div>
    )
}
}

export default Login