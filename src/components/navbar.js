import React, { Component } from 'react'
import { connect } from 'react-redux'

import '../css/navbar.css'
class Navbar extends Component {
    constructor(props){
        super(props)
        this.signOut = this.signOut.bind(this)
    }

    signOut = () =>{
        this.props.signOut()
    }

    particularNavbarItems(){
        return (
            <ul className="navbar-nav">
                <li className="nav-item nav-link">
                    Hie {this.props.currentUser}
                </li>
                <li className="nav-item hover-effect">
                    <a className="nav-link" href="/home">Home</a>
                </li>
                <li className="nav-item hover-effect">
                    <a className="nav-link" href="/group">Create Group</a>
                </li>
                <li className="nav-item hover-effect">
                    {/* <a className="nav-link" href="#">Setting</a> */}
                </li>
                <li className="nav-item hover-effect">
                    <p className="nav-link signout" onClick={ this.signOut }>Sign Out</p>
                </li>
            </ul>
        )
    }
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light navbar-transparent">
                <a className="navbar-brand" href="#">Smart Chat</a>
                
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

const mapStateToProps = state =>{
    return {
        currentUser : state.currentUser
    }
}

export default connect(mapStateToProps,null)(Navbar)