import React,{useState} from 'react'
import './UserName.css'
import {getUserProfile,getUserRepo} from '../../action/action'
import { useDispatch } from 'react-redux'

const UserName = (props) => {
  const [ProfileName,setProfileName]=useState('')
  const dispatch=useDispatch()
 
  
  const HandleNext=async(e)=>{
    e.preventDefault()
    if(ProfileName!=='')
    {
      
      dispatch(getUserProfile(ProfileName,props.setshowGit))
      dispatch(getUserRepo(ProfileName,props.setshowGit))
      
    }
    else{
      alert('Enter the Name')
    }
}

  return (
    <div className='UrNameContainer'>
        <h3>Write Your UserName</h3>
        <input onChange={(e)=>{setProfileName(e.target.value)}}/>
        <br/>
        <button className='UserButton' onClick={HandleNext}>Next</button>

        
    </div>
  )
}

export default UserName