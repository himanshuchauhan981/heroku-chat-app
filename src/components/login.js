import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'

import '../css/login.css'
import { checkLoginFields } from '../js/validation'
import { GoogleLogin } from 'react-google-login'
import { baseUrl, googleCredentials } from '../keys'
import * as actionTypes from '../Store/Actions'

class Login extends Component {
	constructor(props) {
		super(props)
		this.state = {
			loginUsernameError: '',
			loginPasswordError: '',
			loginError: ''
		}
	}
	componentDidMount() {
		let obj
		let status = false
		if (localStorage.getItem('tokenMethod') === "Email") {
			obj = { 'token': localStorage.getItem('token'), 'accountProvider': 'Email' }
			status = true
		}
		else if (localStorage.getItem('tokenMethod') === "Google") {
			obj = { 'token': localStorage.getItem('token'), 'accountProvider': 'Google' }
			status = true
		}
		if (status) {
			axios.get('/login/validate', {
				params: obj
			})
				.then((response) => {
					if (response.data.validate) {
						this.props.history.push({
							pathname: '/home',
							state: { currentUser: response.data.currentUser }
						})
					}
				})
				.catch(err => {
					this.setState({ loginError: err.response.data.loginError })
				})
		}
	}
	submitLoginData = async (event) => {
		event.preventDefault()
		let loginusername = event.target.elements.loginusername.value
		let loginpassword = event.target.elements.loginpassword.value
		let isTrue = this.validate(loginusername, loginpassword);
		if (isTrue) {
			axios({
				method: 'post',
				url: `${baseUrl}/api/login`,
				data: {
					loginusername: loginusername,
					loginpassword: loginpassword
				},
				headers: {
					'Content-Type': 'application/json'
				}
			})
				.then((res) => {
					if (res.data.isLoginSuccessful === true) {
						localStorage.setItem('token', res.data.token)
						localStorage.setItem('tokenMethod', 'Email')
						this.props.setCurrentUser(loginusername)
						this.props.history.push({
							pathname: '/home'
						})
					}
				})
				.catch((err) => {
					console.log(err)
					this.setState({ loginError: err.response.data.loginError })
				})
		}
	}

	validate = (username, password) => {
		let isTrue = true
		let loginUsernameError = checkLoginFields(username)
		if (loginUsernameError) {
			isTrue = false
		}
		this.setState({ loginUsernameError })

		let loginPasswordError = checkLoginFields(password)
		if (loginPasswordError) {
			isTrue = false
		}
		this.setState({ loginPasswordError })
		return isTrue
	}

	successGoogleSignUp = (user) => {
		let token = user.tokenObj.id_token
		axios.post('/auth/google', user.profileObj)
			.then((res) => {
				if (res.data.isSignUpSuccessful) {
					localStorage.setItem('token', token)
					localStorage.setItem('tokenMethod', 'Google')
					this.props.history.push({
						pathname: '/home',
						state: { currentUser: this.state.loginusername }
					})
				}
			})
	}

	failGoogleSignUp = (user) => {
		console.log(user)
	}

	render() {
		return (
			<div className="container login-container">
				<div className="card pl-3 pr-3 sign-in-card">
					<div className="row">
						<div className="col-md-6">
							<p className="project-title">Smart Chat</p>
							<form name="loginForm" onSubmit={this.submitLoginData}>
								<div className="login-card-body">
									<p className="sign-in">Sign In</p>
									{
										this.state.loginError ? (
											<p className="signup-error-message">{this.state.loginError}</p>
										) : null
									}
									<div className="loginusername">
										<span>Username</span>
										{
											this.state.loginUsernameError ? (
												<p className="signup-error-message">{this.state.loginUsernameError}</p>
											) : null
										}
										<input
											id="loginusername"
											type="text"
											name="loginusername"
											placeholder="Type your Username"
										/>
									</div>
									<div className="loginpassword">
										<span>Password</span>
										{
											this.state.loginPasswordError ? (
												<p className="signup-error-message">{this.state.loginPasswordError}</p>
											) : null
										}
										<input
											type="password"
											id="loginpassword"
											name="loginpassword"
											placeholder="Type your Password"
										/>
									</div>
									<button type="submit" className="btn btn-rounded btn-block mt-3">Sign In</button>
									<a href="/signup">
										<button type="button" className="btn btn-rounded btn-block mt-2">Create an Account</button>
									</a>
									<p className="forget-password mt-2">Forget Password ?</p>
								</div>
							</form>
						</div>
						<div className="col-md-6 m-8">
							<a href="/signup">
								<button type="button" className="btn btn-block btn-rounded btn-outline-primary mb-2">
									<i className="fa fa-envelope"> Sign Up with Email</i>
								</button>
							</a>
							<GoogleLogin
								clientId={googleCredentials.googleClientID}
								render={renderProps => (
									<button type="button"
										onClick={renderProps.onClick}
										className="btn btn-block btn-rounded btn-outline-danger mb-2">
										<i className="fa fa-google"> Sign Up with Gmail</i>
									</button>
								)}
								onSuccess={this.successGoogleSignUp}
								onFailure={this.failGoogleSignUp}
							/>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

const mapDispatchToProps = dispatch => {
	return {
		setCurrentUser: (currentUser) => dispatch({ type: actionTypes.SET_CURRENT_USER, currentUser: currentUser })
	}
}
export default connect(null, mapDispatchToProps)(Login)