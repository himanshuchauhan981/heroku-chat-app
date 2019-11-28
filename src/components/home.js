import React, { Component } from 'react'
import ChatBox from './chatComponents/chatBox'
import UserList from './chatComponents/userList'
import io from 'socket.io-client'

import { socketUrl } from '../keys'
import { createUser } from '../Factories/factories'
import * as actionTypes from '../Store/Actions'
import {connect} from 'react-redux'

class Home extends Component{
    constructor(props){
        super(props)
        this.state = {
            activeUserList: []
        }
    }
    
    componentDidMount(){
        this.initiateSocket()
    }

    initiateSocket = async () =>{
        let socketIO = io(socketUrl)
        await this.props.setUserSocket(socketIO)
        await this.props.setCurrentUser(this.props.location.state.currentUser)
        this.setUser(this.props.currentUser)
    }

    setUser = (user)=>{
        const socket = this.props.socket
        socket.on('connect',()=>{
            const createuser = createUser(user,socket.id)
            socket.emit('CONNECT_USERS', createuser,this.props.currentUser)
        })
        
        socket.on('CONNECTED_USERS',(activeUsers)=>{
            this.setState({activeUserList: activeUsers})
        })
    }

    render(){
        return(
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-4 col-sm-12">
                        <UserList 
                            userList = {this.state.activeUserList}
                        />
                    </div>
                    {
                        this.props.activeChatWindow ? (
                            <div className="col-lg-8 col-md-8">
                                <ChatBox />
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
        setUserSocket : (socket) => dispatch({type:actionTypes.SET_USER_SOCKET,socket: socket}),
        setCurrentUser : (currentUser) => dispatch({type:actionTypes.SET_CURRENT_USER, currentUser: currentUser})
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Home)