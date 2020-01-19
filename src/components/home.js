import React, { Component } from 'react'
import { connect } from 'react-redux'
import io from 'socket.io-client'

import ChatBox from './chatComponents/chatBox'
import UserList from './chatComponents/userList'
import Navbar from './navbar'
import { baseUrl } from '../keys'
import { createUser } from '../Factories/factories'


class Home extends Component {
    constructor(props) {
        super(props)
        this.socket = io(baseUrl)
        this.state = {
            activeUserList: []
        }
    }

    componentDidMount() {
        this.initiateSocket()
    }

    initiateSocket = async () => {
        let currentUser = this.props.currentUser
        this.setUser(currentUser)
    }

    setUser = (user) => {
        this.socket.on('connect', () => {
            const createuser = createUser(user, this.socket.id)
            this.socket.emit('CONNECT_USERS', createuser, this.props.currentUser)
        })

        this.socket.on('CONNECTED_USERS', (activeUsers) => {
            this.setState({ activeUserList: activeUsers })
        })
    }

    signOut = ()=>{
        localStorage.clear()
        this.props.history.push('/login')
    }

    render() {
        return (
            <div className="container-fluid">
                <Navbar 
                    signOut = { this.signOut }
                />
                <div className="home-container">
                    <div className="row">
                        <div className="col-md-4 col-sm-12">
                            <UserList
                                socket={this.socket}
                                userList={this.state.activeUserList}
                            />
                        </div>
                        {
                            this.props.activeChatWindow ? (
                                <div className="col-lg-8 col-md-8">
                                    <ChatBox
                                        socket={this.socket}
                                    />
                                </div>
                            ) : null
                        }

                    </div>
                </div>
            </div>
        )
    }
}


const mapStateToProps = state => {
    return {
        socket: state.socket,
        currentUser: state.currentUser,
        activeChatWindow: state.activeChatWindow
    }
}


export default connect(mapStateToProps, null)(Home)