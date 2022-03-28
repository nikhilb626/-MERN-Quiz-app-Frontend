import React,{useState,useContext} from 'react';
import {Link} from "react-router-dom"; 
import AuthContext from "../context/AuthContext";
import { logoutUser } from '../service/useraxios';
import {useHistory} from "react-router-dom";

const Navbar = () => {

    const history=useHistory();


    const {loggedIn,getLoggedIn,checkAdmin,win}=useContext(AuthContext);



    const [navcls,setNavcls]=useState("navbar");


    const handleNav=async()=>{
        setNavcls("navbar show");
    }



    const handleClose=async()=>{
        setNavcls("navbar");
    }


    const handleLogout=async()=>{
        await logoutUser();
          await getLoggedIn();
          history.push("/login");

    }

  return (
      <>


<span id="menu" onClick={handleNav}>Menu</span>

          <div className={navcls}>
          <div className="closeBtn" onClick={handleClose}>X</div>

          {
           checkAdmin &&  loggedIn?(
                  <>
          <Link to="/adminhomepage" className="_links">Home</Link>
          
          <button onClick={handleLogout}>Logout</button>

                  </>
              ):  win &&  loggedIn?(
                  <>
          
          <button onClick={handleLogout}>Logout</button>

                  </>
              ):loggedIn?(
                  <>
        <Link to="/termsandcondition" className="_links">Home</Link>
          <button onClick={handleLogout}>Logout</button>
               </>
              ):(
                  <>
                  <Link to="/" className="_links">Home</Link>
     
                  </>
              )
          }

         

            
           </div>


      </>
  )
};

export default Navbar;
