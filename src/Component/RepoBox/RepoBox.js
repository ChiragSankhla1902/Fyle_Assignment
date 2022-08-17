import axios from 'axios'
import React,{useState,useEffect} from 'react'
import './RepoBox.css'

const RepoBox = (props) => {

  const [lang,setlang]=useState([])
   axios.get(`https://api.github.com/repos/defunkt/${props.val?.name}/languages`,{
    headers:{
      Authorization:'Bearer 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'
    }
   })
  .then((Response)=>{
    var l=Response?.data
    setlang(l?Object.keys(l):[])
  })
  .catch((error)=>{console.log(error)})


  return (
    <div className='RepoContianer'>
        <div className='RepoName'>{props.val?.name}</div>
        <div className='RepoDis'><p style={{margin:'12px 0px'}}>{props.val?.description}</p></div>
        <div className='Repolang'>
        {
          lang?.map((val,ind)=>{
                return(
                  ind<5?
                <div className='LangBox'>
                  {val}
                 </div>
                 :
                 <></>
                )
              })
        }

        </div>
    </div>
  )
}

export default RepoBox