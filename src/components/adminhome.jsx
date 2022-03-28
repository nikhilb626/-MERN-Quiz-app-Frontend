import React from 'react'
import Navbar from "./navbar";
import {useHistory} from "react-router-dom";

const Adminhome = () => {

    const history=useHistory();

    const handleList=async()=>{
        history.push("/participantsscorelist");
    }


  return(
      <>
      <Navbar />

    <div className="buttons_container">
        <div className="button">
            <button onClick={handleList}>SHOW PARTICIPANTS</button>
        </div>
    </div>

      </>

  )
}

export default Adminhome;