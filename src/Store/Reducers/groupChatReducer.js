const initialState  = {
    addGroupMembersComponent : true,
    groupName: ''
}

const groupChatReducer = (state=initialState,action)=>{
    if(action.type === 'SET_ADD_MEMBERS_COMPONENT'){
        return {
            ...state,
            addGroupMembersComponent : false
        }
    }
    else if(action.type === 'SET_GROUP_NAME'){
        return {
            ...state,
            groupName : action.groupName
        }
    }
    return state
}

export default groupChatReducer