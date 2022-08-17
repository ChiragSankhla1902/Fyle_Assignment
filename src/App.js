import React,{useEffect, useState} from 'react'
import './App.css';
import GitSection from './Component/Gitsection/GitSection';
import UserName from './Component/UserName/UserName';

function App() {

  const [showGit,setshowGit]=useState(false)
  useEffect(()=>{console.log(showGit)},[showGit])
  return (
    <div className='AppContainer'>
      {showGit?<GitSection  setshowGit={setshowGit}/>:<UserName  setshowGit={setshowGit}/>}
    </div>
  );
}

export default App;
