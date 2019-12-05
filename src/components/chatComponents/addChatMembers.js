import React, { Component } from 'react'
import '../../css/groupChat.css'
import axios from 'axios'

import {connect} from 'react-redux'

class AddChatMembers extends Component {
    constructor(props){
        super(props)
        this.state = {
            groupMembers : [],
            totalMembers : 0,
            addMember :[]
        }
    }
    componentDidMount(){
        axios({
            method:'get',
            url:'https://smart-chat-backend.herokuapp.com/group/addMembers',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then((res)=>{
            this.setState({
                groupMembers : res.data
            })
        })
    }
    
    addGroupMembers = (username)=>{
        let index = this.state.addMember.indexOf(username)
        if(index === -1){
            this.setState(prevState =>({
                addMember : [...prevState.addMember, username],
                totalMembers : this.state.addMember.length + 1
            }))  
        }
        else{
            this.setState({addMember : this.state.addMember.filter((member)=>{
                return member !== username
            }),
            totalMembers : this.state.addMember.length - 1
        })
        }
    }

    render() {
        let memberlist = this.state.groupMembers.map(member => {
            return (
                <div className="member" key = {member._id} onClick={() =>this.addGroupMembers(member.username)}>
                    <img alt = "image" src="https://www.w3schools.com/howto/img_avatar.png" className="rounded-circle" />
                    <p className="memberName">{ member.username }</p>
                </div>
            )
        });    
        return (
            <div>
                <div className="card-header groupCardHeader">
                    <p>{ this.props.heading }</p>
                    <a href="#" className="groupCloseButton"></a>
                </div>
                <div className="groupCardBody">
                    <form>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6 col-md-6">
                                    <div className="memberSearchBox">
                                        { memberlist }
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                    <div className="currentGroupMember">
                                        <h3>Current group details</h3>
                                        <div className="groupDetails">
                                            <p>Group Name : { this.props.groupName }</p>
                                            <p>Total Members : { this.state.totalMembers }</p>
                                            <p>Member Limit : 20 </p>
                                        </div>
                                        <button type="submit" className="btn btn-success btn-lg">Save</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state =>{
    return {
        groupName : state.groupChatReducer.groupName
    }
}

export default connect(mapStateToProps)(AddChatMembers)