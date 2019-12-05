import React, { Component } from 'react'
import axios from 'axios'
import { createUserData } from '../Factories/factories'
import { checkUsername, checkPassword, checkConfirmPassword, checkEmail} from '../js/validation'
import '../css/signUp.css'

class SignUp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            errorMessage:'',
            usernameError:'',
            userEmailError:'',
            passwordError:'',
            confirmPasswordError:''
        }
    }

    getSignUpData = async(e) => {
        e.preventDefault()
        let username = e.target.elements.signupusername.value
        let password = e.target.elements.signuppassword.value
        let confirmPassword = e.target.elements.signupconfPassword.value
        let email = e.target.elements.signupemail.value

        const userjson = createUserData(username,password,email,'Email',null)

        let isValidData = this.validate(username,email,password,confirmPassword)
        if(isValidData){
            axios({
                method: 'post',
                url: 'https://smart-chat-backend.herokuapp.com/signUp',
                data: userjson,
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then((res) => {
                if (res.data.isSignUpSuccessful === true) {
                    this.props.history.push('/')
                }
                else {
                    this.props.setSignUpFailError('User already Existed')
                    this.props.history.push('/SignUp')
                }
            })
        }
    }

    validate = (username,email,password,confirmPassword) =>{
        let isDataTrue = true;
        let usernameError = checkUsername(username.length, username)
        if(usernameError){
            isDataTrue = false;
        }
        this.setState({ usernameError })

        let passwordError = checkPassword(password.length, password)
        if(passwordError){
            isDataTrue = false
        }
        this.setState({ passwordError })

        let confirmPasswordError = checkConfirmPassword(password, confirmPassword)
        if(confirmPasswordError){
            isDataTrue = false
        }
        this.setState({ confirmPasswordError })

        let userEmailError = checkEmail(email)
        if(userEmailError){
            isDataTrue = false
        }
        this.setState({ userEmailError })
        
        return isDataTrue  
    }

    render() {
        return (
            <div className="container">
                <div className="card pl-3 pr-3 sign-up-card">
                    <div className="row">
                        <div className="col-md-6">
                            <p className="project-title">Smart Chat</p>
                            <div className="mt-4 mb-4">
                                <a href="/login"><button type="button" className="btn mb-2 btn-block btn-rounded btn-outline-primary"><i className="fa fa-envelope"> Sign up with Email</i></button></a>
                                <button type="button" className="btn btn-block btn-rounded btn-outline-danger"><i className="fa fa-google"> Sign up with Google</i></button>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="p-2">
                                <p className="sign-in mt-3">Sign In</p>
                                <form name="signupForm" onSubmit={this.getSignUpData} >
                                    {
                                        this.state.errorMessage?(
                                        <p className="signup-error-message">{ this.state.errorMessage }</p>
                                        ):null
                                    }
                                    <div className="signupusername">
                                        <span className="mt-4">Username</span>
                                        {
                                            this.state.usernameError ? (
                                            <p className="signup-error-message">{ this.state.usernameError }</p>
                                            ):null
                                        }
                                        <input
                                            id="signupusername"
                                            type="text"
                                            placeholder="Enter your username"
                                            name="signupusername"
                                        />
                                    </div>
                                    <div className="signupemail">
                                        <span className="mt-4">Email</span>
                                        {
                                            this.state.userEmailError ? (
                                            <p className="signup-error-message">{ this.state.userEmailError }</p>
                                            ):null
                                        }
                                        <input 
                                            id="signupemail"
                                            type="text"
                                            placeholder="Enter your email"
                                            name="signupemail"
                                        />
                                    </div>
                                    <div className="signuppassword">                                        
                                        <span className="mt-4">Password</span>
                                        {
                                            this.state.passwordError?(
                                            <p className="signup-error-message">{ this.state.passwordError }</p>
                                            ):null
                                        }
                                        <input 
                                            id="signuppassword"
                                            type="password"
                                            placeholder="Enter your password"
                                            name="signuppassword"
                                        />
                                    </div>
                                    <div className="signupconfPassword">
                                        <span className="mt-4">Confirm Password</span>
                                        {
                                            this.state.confirmPasswordError?(
                                            <p className="signup-error-message">{ this.state.confirmPasswordError }</p>
                                            ):null
                                        }
                                        <input id="signupconfPassword"
                                            type="password"
                                            placeholder="Re enter your password"
                                            name="signupconfPassword" />
                                    </div>
                                    <button type="submit" className="btn btn-rounded btn-primary btn-block mt-3 mb-4">Sign up</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SignUp