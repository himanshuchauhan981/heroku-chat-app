const initialState = {
    currentUser :'',
    receiver : '',
    room : '',
    activeChatWindow : false
}

const rootReducer = (state = initialState,action)=>{
    if(action.type === 'SET_CURRENT_USER'){
        return {
            ...state,
            currentUser : action.currentUser
        }
    }
    else if(action.type === 'SET_RECEIVER_AND_ROOM'){
        return{
            ...state,
            receiver: action.receiver,
            room: action.room,
            activeChatWindow : true
        }
    }
    return state
}

export default rootReducer