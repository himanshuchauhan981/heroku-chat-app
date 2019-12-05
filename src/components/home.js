import React, { Component } from 'react'
import ChatBox from './chatComponents/chatBox'
import UserList from './chatComponents/userList'
import io from 'socket.io-client'
import Navbar from './navbar'

import { socketUrl } from '../keys'
import { createUser } from '../Factories/factories'
import * as actionTypes from '../Store/Actions'
import {connect} from 'react-redux'
import { Redirect } from 'react-router-dom'

class Home extends Component{
    constructor(props){
        super(props)
        this.socket = io(socketUrl)
        this.state = {
            activeUserList: []
        }
    }
    
    componentDidMount(){
        this.initiateSocket()
    }

    initiateSocket = async () =>{
        this.setUser(this.props.currentUser)
    }

    setUser = (user)=>{
        this.socket.on('connect',()=>{
            const createuser = createUser(user,this.socket.id)
            this.socket.emit('CONNECT_USERS', createuser,this.props.currentUser)
        })
        
        this.socket.on('CONNECTED_USERS',(activeUsers)=>{
            this.setState({activeUserList: activeUsers})
        })
    }

    render(){
        if(this.props.currentUser === ""){
            console.log('signing out')
            return <Redirect to="/login" />
        }
        return(
            <div className="container-fluid">
                <Navbar 
                    socket = { this.socket }
                />
                <div className="row">
                    <div className="col-md-4 col-sm-12">
                        <UserList 
                            socket = { this.socket }
                            userList = {this.state.activeUserList}
                        />
                    </div>
                    {
                        this.props.activeChatWindow ? (
                            <div className="col-lg-8 col-md-8">
                                <ChatBox 
                                    socket = {this.socket }
                                />
                            </div>
                        ):null
                    }
                    
                </div>
            </div>
        )
    }
}


const mapStateToProps = state =>{
    return {
        socket : state.homeReducer.socket,
        currentUser : state.homeReducer.currentUser,
        activeChatWindow : state.homeReducer.activeChatWindow
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        setCurrentUser : (currentUser) => dispatch({type:actionTypes.SET_CURRENT_USER, currentUser: currentUser})
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Home)