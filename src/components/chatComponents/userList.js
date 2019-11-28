import React, { Component } from 'react'
import '../../css/userList.css'
import { createRoom } from '../../Factories/factories'
import { connect } from 'react-redux'
import * as actionTypes from '../../Store/Actions'

class UserList extends Component{

    generatorRoomID = async (receiver)=>{
        let sender = this.props.currentUser
        let socket = this.props.socket
        let roomID = createRoom(sender,receiver)
        this.props.setRoomAndReceiver(receiver,roomID)
        socket.emit('JOIN_ROOM',roomID)
    }

    render(){
        const userlist = this.props.userList.map(user =>{
            if(user.username !== this.props.currentUser){
                user.username = user.username.substring(0,1).toLocaleUpperCase() + user.username.substring(1)
                return(
                    <div className="show-users" key={user._id} onClick = { ()=>this.generatorRoomID(user.username) }>
                        <img src="https://www.w3schools.com/howto/img_avatar.png" className="rounded-circle" alt="" />
                        <div className="userlist-text">
                            <p className="userlist-name">{ user.username }</p>
                            <p className="userlist-status">{user.usersInfo[0].isActive}</p>
                        </div>
                    </div>
                )
            }
        })

        return(
            <div className="card userlist-card">
                <div className="userlist-header">
                    <input type="text" className="username" placeholder="Enter Username..." alt=""/>
                </div>
                <div className="userlist-body">
                   { userlist }
                </div>
            </div>
        )
    }
}

const mapStateToProps = state =>{
    return {
        currentUser : state.homeReducer.currentUser,
        socket : state.homeReducer.socket
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        setRoomAndReceiver : (receiver,room)=> dispatch({type:actionTypes.SET_RECEIVER_AND_ROOM,receiver:receiver,room:room})
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(UserList)