import axios from 'axios'

var token='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'
export const UserProfile=(ProfileName)=>{
    
    return axios.get(`https://api.github.com/users/${ProfileName}`,{
        headers:{
        Authorization:token
      }})
}
export const getUserRepo=(ProfileName)=>{
    return axios.get(`https://api.github.com/users/${ProfileName}/repos`,{ 
        headers:{
        Authorization:token
    }
})
}