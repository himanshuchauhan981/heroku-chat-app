import React, { Component } from 'react'
import '../css/navbar.css'
import * as actionTypes from '../Store/Actions'
import {connect} from 'react-redux'

class Navbar extends Component {
    signout = ()=>{
        let socket = this.props.socket
        socket.emit('SIGN_OUT')
        localStorage.clear()
        this.props.setCurrentUser("")
    }

    particularNavbarItems(){
        return (
            <ul className="navbar-nav">
                <li className="nav-item hover-effect">
                    <a className="nav-link" href="/home">Home</a>
                </li>
                <li className="nav-item hover-effect">
                    <a className="nav-link" href="/group">Create Group</a>
                </li>
                <li className="nav-item hover-effect">
                    <a className="nav-link" href="#">Setting</a>
                </li>
                <li className="nav-item hover-effect">
                    <a className="nav-link" href="#" onClick = { this.signout }>Sign Out</a>
                </li>
            </ul>
        )
    }
    signOutNavbarItems(){
        return (
            <ul className="navbar-nav">
                <li className="nav-item hover-effect">
                    <a className="nav-link" href="/login">Login</a>
                </li>
                <li className="nav-item hover-effect">
                    <a className="nav-link" href="/signUp">Sign Up</a>
                </li>
            </ul>
        )
    }
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light navbar-transparent">
                <a className="navbar-brand" href="#">Smart Chat</a>
                {
                    this.props.currentUser ? <li className="nav-item nav-link">Hie {this.props.currentUser}</li> : null
                }
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                    {
                         this.particularNavbarItems()
                    }
                </div>
            </nav>
        )
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        setCurrentUser : (currentUser) => dispatch({type:actionTypes.SET_CURRENT_USER, currentUser: currentUser})
    }
}

export default connect(null,mapDispatchToProps)(Navbar)