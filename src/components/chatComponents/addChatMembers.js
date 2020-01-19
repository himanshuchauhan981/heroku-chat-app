import React, { Component } from 'react'
import '../../css/groupChat.css'

class AddChatMembers extends Component{
    render(){
        return(
            <div>
                <div className="card-header groupCardHeader">
                    <p>{ this.props.heading }</p>
                    {/* <a href="#" className="groupCloseButton"></a> */}
                </div>
                <div className="groupCardBody">
                    <form>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="memberSearchBox">
                                        <div className="member">
                                            <img alt="" src="https://www.w3schools.com/howto/img_avatar.png" className="rounded-circle"/>
                                            <p className="memberName">Himanshu Chauhan</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="currentGroupMember">
                                        <h3>Current group details</h3>
                                        <div className="groupDetails">
                                            <p>Group Name : ABC Group</p>
                                            <p>Total Members : 10</p>
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

export default AddChatMembers