const uuidv4 = require('uuid/v4')

const createUserData = (username,password,email,provider,userImage) =>{
    const data = {
        username: username,
        password: password,
        email: email,
        accountProvider: provider,
        userImage: userImage
    }
    return data
}

const createUser = (user,id)=>{
    const data = {
        userId: uuidv4(),
        name: user,
        socketID: id
    }
    return data
}

const createMessage = (sender,receiver,msg,room)=>{
    const message = {
        text: msg,
        receiver: receiver,
        sender: sender,
        room: room
    }
    return message
}

const createRoom = (sender,receiver)=>{
    sender = sender.toLowerCase()
    receiver = receiver.toLowerCase()
    let roomArray = []
    roomArray.push(sender,receiver)
    let roomID = roomArray.sort().toString()
    return roomID
}

module.exports = {
    createUserData,
    createUser,
    createMessage,
    createRoom
}