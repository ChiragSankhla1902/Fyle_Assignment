import * as api from '../api/api'


export const getUserProfile=(Name,setshowGit)=>async(dispatch)=>{
    try {
     
        setshowGit(true)
        const{data}=await api.UserProfile(Name);
        
        dispatch({type:'Profile' ,payload:data});

    } catch (error) {
        setshowGit(false)
     
    }
}

export const getUserRepo=(Name,setshowGit)=>async(dispatch)=>{
    try {
        const{data}=await api.getUserRepo(Name);
        dispatch({type:'Repo' ,payload:data});
    } catch (error) {
        setshowGit(false)

        alert('There is an Error')

        
    }
}