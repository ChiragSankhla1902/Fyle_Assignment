import axios from 'axios'
import React,{useState} from 'react'
import './RepoBox.css'

const RepoBox = (props) => {


  const [lang,setlang]=useState([])
  var f=[]


  let profile=JSON.parse(localStorage.getItem(`${props.name}`))

  if(profile[`${props.val?.id}`]===undefined)
  {
    axios.get(`https://api.github.com/repos/${props.name}/${props.val?.name}/languages`,{
      headers:{
        Authorization:'Bearer Token'
      }
     })
    .then((Response)=>{
      var l=Response?.data
      var ob=JSON.parse(localStorage.getItem(`${props.name}`))
      ob[`${props.val.id}`]=l;
      localStorage.setItem(`${props.name}`,JSON.stringify(ob))
      setlang(l?Object.keys(l):[])
    })
    .catch((error)=>{console.log(error)})
  }
  else{
    if(Object.keys(profile[`${props.val?.id}`]).length !== 0)
    {
      var obj=profile[`${props.val?.id}`]
      f=Object.keys(obj)
  
    }

  }



  return (
    <div className='RepoContianer'>
        <div className='RepoName'>{props.val?.name}</div>
        <div className='RepoDis'><p style={{margin:'12px 0px'}}>{props.val?.description}</p></div>
        <div className='Repolang'>
        {
          !f.length?     lang?.map((val,ind)=>{
                return(
                  ind<5?
                <div className='LangBox'>
                  {val}
                 </div>
                 :
                 <></>
                )
              })  
              :
          
          f?.map((val,ind)=>{
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