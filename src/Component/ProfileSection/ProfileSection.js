import React,{useEffect} from 'react'
import './ProfileSection.css'

const ProfileSection = (props) => {

  
  return (
    <div className='ProfileContainer'>
        <div className='AvatarContainer'>
            <div className='AvatarImg'>
              <img width='100%' src={props.Details.avatar_url}/>
            </div>
        </div>
        <div className='UserDetails'>
            <h3>{props.Details.name}</h3>
            <h3>{props.Details.bio}</h3>
            <h3>{props.Details.url}</h3>
        </div>
    </div>

  )
}

export default ProfileSection