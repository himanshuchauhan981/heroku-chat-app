import React, { Component } from 'react';
import '../../css/chatbox.css'
import { createMessage } from '../../Factories/factories'

import {connect} from 'react-redux'
// import * as actionTypes from '../../Store/Actions'

class ChatBox extends Component{
    constructor(props){
        super(props)
        this.state = {
            message:'',
            messageArray:[]
        }
        this.socket = this.props.socket
        this.socket.on('RECEIVE_MESSAGE',(messages,receiver)=>{
            if(this.props.receiver.toLowerCase() === receiver){
                this.setState({
                    messageArray : messages
                })
            }
            else{
                this.socket.emit('UPDATE_NEW_MESSAGE',this.props.currentUser)
            }
        })

        this.socket.on('SHOW_USER_MESSAGES',(messages,receiver)=>{
            if(this.props.receiver.toLowerCase() === receiver.toLowerCase()){
                this.setState({
                    messageArray : messages
                })
            }
        })
    }

    setMessage = (event)=>{
        this.setState({
            message: event.target.value
        })
    }

    sendMessage = (event)=>{
        event.preventDefault()
        let socket = this.props.socket
        let newMessage = createMessage(this.props.currentUser,this.props.receiver,this.state.message,this.props.room)
        socket.emit('SEND_MESSAGE',newMessage)
        this.setState({ message : '' })
    }

    render(){
        const messageList = this.state.messageArray.map(message =>{
            return(
                <div key = { message._id }>
                    <div className="chat-username">
                        <img src="https://www.w3schools.com/howto/img_avatar.png" className="rounded-circle" alt="" />
                        <p className="chat-message">{ message.text }</p>
                    </div>
                    <p className="chat-sender">{ message.sender }</p>
                </div>
            )
        })

        return(
            <div className="card chat-card">
                <div className="chat-header">
                    <img src="https://www.w3schools.com/howto/img_avatar.png" className="rounded-circle" alt="" />
                    <div className="chat-text">
                        <p className="chat-name">{ this.props.receiver }</p>
                        <p className="chat-length">35 messages</p>
                    </div>
                    <span className="icon-right"><i className="fa fa-ellipsis-v"></i></span>
                    <div className="side-menu">
                        <ul>
                            <li><i className="fa fa-user-circle"></i> View profile</li>
                            <li><i className="fa fa-sign-out"></i> Sign Out</li>
                            {/* <li onClick = {()=>{this.props.logout()}}><i className="fa fa-sign-out"></i>Log Out</li> */}
                        </ul>
                    </div>
                </div>
                <div className="chat-body">
                    { messageList }
                </div>
                <form onSubmit={ this.sendMessage }>
                    <div className="chat-footer" onChange = {this.setMessage}>
                        <input type="text" 
                            className="send-chat" 
                            placeholder="Type your messsage...." 
                            value = {this.state.message }
                            onChange = {this.setMessage }
                        />
                        <span className="send-button" onClick = {this.sendMessage } ><i className="fa fa-send"></i></span>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        receiver : state.receiver,
        room : state.room,
        currentUser : state.currentUser
    }
}

export default connect(mapStateToProps,null)(ChatBox)