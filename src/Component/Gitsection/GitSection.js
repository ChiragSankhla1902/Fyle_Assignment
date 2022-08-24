import React,{ useState} from 'react'
import './GitSection.css'
import ProfileSection from '../ProfileSection/ProfileSection'
import RepoBox from '../RepoBox/RepoBox'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useSelector,useDispatch } from 'react-redux';
import CircularProgress from '@mui/material/CircularProgress'
import { getUserRepo } from '../../action/action';

const GitSection = (props) => {

  const dispatch=useDispatch()
  const Details=useSelector((state)=>state.userProfile)
  const [loading,setloading]=useState(true)
  setTimeout(() => {
    setloading(false) // for lazy loading
  }, 3000);


  
  
  if(Details?.name!=='' && localStorage.getItem(`${Details?.login}`)===null &&!loading)
  {
    localStorage.setItem(`${Details?.login}`,JSON.stringify(Details))
  }

  return (

      Details?.loading || loading ?<><CircularProgress/></>
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
            return(<RepoBox val={val} name={Details?.login}/>)
          })
        }
        </div>
        <br/>
        <div className='ButtonSection'>
          <button className='Button'  onClick={()=>{setloading(true); dispatch(getUserRepo(Details?.login,"dec"))}}>Prev</button>
          {Details?.Repo.length!==0?<button className='Button' onClick={()=>{setloading(true);dispatch(getUserRepo(Details?.login,"inc"))}}>Next</button>:<><h1>Reached the End</h1></>}
          
        </div>
      </div>
      
      </>

  )
}

export default GitSection