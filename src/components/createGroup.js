import React, { Component } from 'react'
import CreateGroupName from './chatComponents/createGroupName'
import AddChatMembers from './chatComponents/addChatMembers'
import '../css/groupChat.css'
import Navbar from './navbar'

import {connect} from 'react-redux'

class CreateGroup extends Component {
    render() {
        return (
            <div className="container-fluid">
                <Navbar />
                <div className="container groupContainer">
                    <div className="row">
                        <div className="card groupCard">
                            {
                                this.props.addGroupMembersComponent ?
                                    <AddChatMembers
                                        heading="Add members"
                                    /> :
                                    <CreateGroupName
                                        heading="Create Group"
                                    />
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state =>{
    return{
        addGroupMembersComponent : state.groupChatReducer.addGroupMembersComponent
    }
}

export default connect(mapStateToProps)(CreateGroup)