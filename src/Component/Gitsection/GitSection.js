import React,{useState} from 'react'
import './GitSection.css'
import ProfileSection from '../ProfileSection/ProfileSection'
import RepoBox from '../RepoBox/RepoBox'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useSelector } from 'react-redux';
import CircularProgress from '@mui/material/CircularProgress'

const GitSection = (props) => {

  const Details=useSelector((state)=>state.userProfile)
  const [loading,setloading]=useState(true)
  setTimeout(() => {
    setloading(false) // for lazy loading
  }, 3000);

  return (

      Details.avatar_url==='undefined'|| loading ?<><CircularProgress/></>
      :
      <>    
      <ArrowBackIcon onClick={()=>{props.setshowGit(false)}} className='backIcon'/>
      <br/>
  
      <div className='GitSectionContianer'>
        <br/>
        <ProfileSection Details={Details}/>
        <br/>
        <div style={{display:'flex',flexDirection:'row',width:'100%',flexWrap:'wrap'}}>
        {
          Details?.Repo?.map((val,ind)=>{
            return(<RepoBox val={val} />)
          })
        }
        </div>
      
      </div>
      </>

  )
}

export default GitSection