const userProfile=(Details=({loading:true}),action)=>{
    switch (action.type) {
        case 'Profile':
            
            return ({
                ...Details,
                avatar_url:action.payload?.avatar_url,
                bio:action.payload?.bio,
                name:action.payload?.name,
                url:action.payload?.url,
                Repo:action.payload?.Repo,
                login:action.payload?.login,
                loading:false

            })
        case 'Repo':
            
            return {...Details,Repo:action.payload}
        case 'Already':
            
            return action.payload
        default:
            return Details
    }

}

export default userProfile;