const userProfile=(Details=({}),action)=>{
    switch (action.type) {
        case 'Profile':
            return (action.payload)
        case 'Repo':
            return {...Details,Repo:action.payload}
        default:
            return Details
    }

}

export default userProfile;