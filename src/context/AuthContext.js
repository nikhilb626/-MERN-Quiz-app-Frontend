import React,{createContext,useState} from "react";
import { useEffect } from "react";
import { loggedInUser } from "../service/useraxios";



const AuthContext=createContext();



const AuthContextProvider=(props)=>{






const [regemail,setRegemail]=useState("");



const [loggedIn,setLoggedIn]=useState(() => {
    const stickyValue = window.localStorage.getItem("loggedInValue");
    return stickyValue !== null
      ? JSON.parse(stickyValue)
      : false;
  });



  const [part,setPart]=useState(() => {
    const stickyValue = window.localStorage.getItem("partValue");
    return stickyValue !== null
      ? JSON.parse(stickyValue)
      : false;
  });




  const [win,setWin]=useState(() => {
    const stickyValue = window.localStorage.getItem("winValue");
    return stickyValue !== null
      ? JSON.parse(stickyValue)
      : false;
  });




  const [useremail,setUseremail]=useState(() => {
    const stickyValue = window.localStorage.getItem("emailValue");
    return stickyValue !== null
      ? JSON.parse(stickyValue)
      : "";
  });



  const [firstname,setFirstname]=useState(() => {
    const stickyValue = window.localStorage.getItem("firstnameValue");
    return stickyValue !== null
      ? JSON.parse(stickyValue)
      : "";
  });



  const [lastname,setLastname]=useState(() => {
    const stickyValue = window.localStorage.getItem("lastnameValue");
    return stickyValue !== null
      ? JSON.parse(stickyValue)
      : "";
  });



  const [checkAdmin,setCheckadmin]=useState(()=>{
    const stickyValue = window.localStorage.getItem("adminValue");
    return stickyValue !== null
      ? JSON.parse(stickyValue)
      : "";
  })



  const [pass,setPass]=useState(()=>{
    const stickyValue = window.localStorage.getItem("passingValue");
    return stickyValue !== null
      ? JSON.parse(stickyValue)
      : "";
  })



  const [userId,setUserId]=useState(()=>{
    const stickyValue = window.localStorage.getItem("useridValue");
    return stickyValue !== null
      ? JSON.parse(stickyValue)
      : 0;
  }

  )



  const [phone,setPhone]=useState(()=>{
    const stickyValue = window.localStorage.getItem("phoneValue");
    return stickyValue !== null
      ? JSON.parse(stickyValue)
      : 0;
  }

  )






  const [score,setScore]=useState(
    ()=>{
        const stickyValue = window.localStorage.getItem("scoreValue");
        return stickyValue !== null
          ? JSON.parse(stickyValue)
          : 0;
      });


const getRegEmail=async(Email)=>{

    setRegemail(Email);
    
}




const getLoggedIn=async()=>{
    const loggedInRes=await loggedInUser();

    setLoggedIn(loggedInRes.data);
    
}




const getEmail=async(data)=>{
    setUseremail(data);
}


const getFirstname=async(data)=>{
    setFirstname(data);
}

const getLastname=async(data)=>{
    setLastname(data);
}



const getAdmin=async(data)=>{
    setCheckadmin(data);
}



const getScoreFunc=async(data)=>{
    setScore(data);
}



const getUserId=async(data)=>{
    setUserId(data);
}


const getphone=async(data)=>{
    setPhone(data);
}



const getAdminPass=async(data)=>{
    setPass(data);

}
const getPart=async(data)=>{
    setPart(data);

}
const getWin=async(data)=>{
    setWin(data);

}





useEffect(()=>{
    getLoggedIn();
    localStorage.setItem("loggedInValue",JSON.stringify(loggedIn));
    localStorage.setItem("firstnameValue",JSON.stringify(firstname));
    localStorage.setItem("lastnameValue",JSON.stringify(lastname));
    localStorage.setItem("emailValue",JSON.stringify(useremail));
    localStorage.setItem("adminValue",JSON.stringify(checkAdmin));
    localStorage.setItem("useridValue",JSON.stringify(userId));
    localStorage.setItem("phoneValue",JSON.stringify(phone));

    localStorage.setItem("adminValue",JSON.stringify(checkAdmin));

    localStorage.setItem("scoreValue",JSON.stringify(score));
    localStorage.setItem("passingValue",JSON.stringify(pass));
    localStorage.setItem("partValue",JSON.stringify(part));
    localStorage.setItem("winValue",JSON.stringify(win));







},[loggedIn,useremail,firstname,lastname,checkAdmin,userId,phone,score,pass,part,win]);







return (
    <AuthContext.Provider value={{regemail,part,win,checkAdmin,loggedIn,pass,useremail,firstname,phone,lastname,score,userId,getRegEmail,getLoggedIn,getEmail,getFirstname,getphone,getLastname,getAdmin,getScoreFunc,getUserId,getAdminPass,getWin,getPart}} >
    {props.children}
    </AuthContext.Provider>
)

}






export default AuthContext;


export {AuthContextProvider};