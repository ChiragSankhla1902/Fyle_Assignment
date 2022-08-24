import axios from 'axios'

var token='Token'
export const UserProfile=(ProfileName)=>{
    
    return axios.get(`https://api.github.com/users/${ProfileName}`,{
        headers:{
        Authorization:token
      }})
}
export const getUserRepo=(ProfileName,pagenumber)=>{
    return axios.get(`https://api.github.com/users/${ProfileName}/repos?page=${pagenumber}&per_page=10`,{ 
        headers:{
        Authorization:token
    }
})
}