const checkUsername = (length,username)=>{
    if(length < 4 && length!== 0) return 'Username length should be more than 4';
	else if(username === "") return 'Required Username';
	else return "";
}

const checkPassword = (length,password)=>{
    if(length < 6 && length !== 0) return 'Password length should be more than 6';
	else if(password === "") return 'Required Password';
	else return "";
}

const checkConfirmPassword = (password,confirmPassword)=>{
    if(confirmPassword === "") return "Required Password"
    else if(password !== confirmPassword) return "Password not matched"
    else return null;
}

const checkLoginFields = (user)=>{
    if(user === "") return "Required field"
    else return null
}

const checkEmail = (email)=>{
    let re = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    if(email=== "") return "Required Field"
    else if(!re.test(email)) return "Invalid Email Address"
    else return null
}


const checkGroupNameField = (groupName)=>{
    if(groupName === "") return "Required Group Name"
    else return null
}

module.exports ={
    checkUsername,
    checkPassword,
    checkConfirmPassword,
    checkLoginFields,
    checkEmail,
    checkGroupNameField
}