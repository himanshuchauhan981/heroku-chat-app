import React, { Component } from 'react'
import CreateGroupName from './chatComponents/createGroupName'
import AddChatMembers from './chatComponents/addChatMembers'
import '../css/groupChat.css'
import Navbar from './navbar'

class CreateGroup extends Component{
    constructor(props){
        super(props)
        this.state = {
            addGroupMembers : false
        }
    }
    render(){
        return(
            <div className="container-fluid">
                <Navbar />
                <div className="container groupContainer">
                <div className="row">
                    <div className="card groupCard">
                        {
                            this.state.addGroupMembers ? 
                            <AddChatMembers 
                                heading = "Add members"
                            />:
                            <CreateGroupName 
                                heading = "Create Group"
                            />
                        }
                    </div>
                </div>
            </div>
            </div>
            
            
            
        )
    }
}

export default CreateGroup