import * as api from '../api/api'


var page=1;

export const getUserProfile=(Name,setshowGit)=>async(dispatch)=>{
    try {
     
        setshowGit(true)
     
        if(localStorage.getItem(Name)===null)
        {
            const{data}=await api.UserProfile(Name);
            dispatch({type:'Profile' ,payload:data});
            page=1;
        }
        else{
            const data=JSON.parse(localStorage.getItem(`${Name}`))
            dispatch({type:'Already' ,payload:data});
        }
 
       

    } catch (error) {
        setshowGit(false)
     
    }
}


export const getUserRepo=(Name,type,setshowGit)=>async(dispatch)=>{

    if(type==="dec" && page>1){page=page-1;}
    if(type==="inc"){page=page+1;}


    if(localStorage.getItem(Name)===null)
    {
        try {
            const{data}=await api.getUserRepo(Name,page);
            dispatch({type:'Repo' ,payload:data});
        } catch (error) {
            setshowGit(false)
            alert('There is an Error')

            
        }

    }
    else{
        let object=JSON.parse(localStorage.getItem(`${Name}`))
        if(object[page]===undefined)
        {
            
            try {
                const{data}=await api.getUserRepo(Name,page);
                object[`${page}`]=data;
                localStorage.setItem(`${Name}`,JSON.stringify(object))
                dispatch({type:'Repo' ,payload:data});
            } catch (error) {
                setshowGit(false)
                alert('There is an Error')
    
                
            }
        }
        else
        {
            const data=object[page];
            dispatch({type:'Repo' ,payload:data});


        }

    }

}