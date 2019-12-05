import React, { Component } from 'react'
import '../../css/groupChat.css'
import { checkGroupNameField } from '../../js/validation'
import axios from 'axios'
import * as actionTypes from '../../Store/Actions'
import { connect } from 'react-redux'

class createGroup extends Component {
    constructor(props) {
        super(props)
        this.state = {
            image: '',
            groupMessage: ''
        }
        this.onChangeImage = this.onChangeImage.bind(this)
    }


    validateGroupDetails = (groupName) => {
        let isTrue = true
        let groupNameError = checkGroupNameField(groupName)
        if (groupNameError) {
            isTrue = false
        }
        this.setState({
            groupMessage: groupNameError
        })
    }

    saveGroupDetails = (event) => {
        event.preventDefault()
        let isTrue = this.validateGroupDetails(event.target.elements.groupName.value)
        if (isTrue) {
            let formData = new FormData()
            formData.set('groupName', event.target.elements.groupName.value)
            formData.set('groupStatus', event.target.elements.groupStatus.value)
            formData.append('groupImage', this.state.image)
            formData.append('groupImageType', this.state.image.type)
            formData.append('admin', this.props.currentUser)
            let url = 'http://localhost:9000/group'
            let config = {
                headers: { 'content-type': 'multipart/form-data' }
            }
            axios.post(url, formData, config, {
                'groupName': event.target.elements.groupName.value
            })
                .then((res) => {
                    this.props.setGroupMemberWindow()
                    this.props.setGroupName(event.target.elements.groupName.value)
                    this.setState({ groupMessage: res.data.msg })
                })
                .catch((error) => {
                    console.log(error)
                })
        }
    }

    onChangeImage(event) {
        this.setState({ image: event.target.files[0] })
    }
    render() {
        return (
            <div>
                <div className="card-header groupCardHeader">
                    <p>{this.props.heading}</p>
                    <a href="#" className="groupCloseButton"></a>
                </div>
                <div className="groupCardBody">
                    <form name="groupName" onSubmit={this.saveGroupDetails} encType="multipart/form-data">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="groupImage">
                                        <div id="groupImageError"></div>
                                        <img id="defaultImage" src="https://blacksaildivision.com/wp-content/uploads/2015/03/centos-users-and-groups.jpg" />
                                        <input type="file"
                                            id="imageUpload"
                                            name="groupImage"
                                            accept="image/png,image/gif,image/jpeg"
                                            onChange={this.onChangeImage}
                                        />
                                        <p className="image-info">Click on image to update group Cover photo</p>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="formMargin">
                                        {
                                            this.state.groupMessage ? <div className="groupErrorMessage">{this.state.groupMessage}</div> : null
                                        }
                                        <div className="form-group">
                                            <label className="group-label">Enter Group name</label>
                                            <input type="text" className="group-name" placeholder="Group name" name="groupName" id="groupName" />
                                        </div>
                                        <div className="form-group">
                                            <label className="group-status-label">Enter Group status</label>
                                            <textarea rows="4" id="status" placeholder="Write meaningful status" name="groupStatus"></textarea>
                                        </div>
                                        <button type="submit" id="submitGroupButton" className=" btn btn-primary btn-lg">Create</button>
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

const mapStateToProps = state => {
    return {
        currentUser: state.homeReducer.currentUser
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setGroupMemberWindow: () => dispatch({ type: actionTypes.SET_ADD_MEMBERS_COMPONENT }),
        setGroupName: (groupName) => dispatch({ type: actionTypes.SET_GROUP_NAME, groupName: groupName })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(createGroup)
