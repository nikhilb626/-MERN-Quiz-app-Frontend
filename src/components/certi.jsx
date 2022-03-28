import React,{useContext} from 'react';
import AuthContext from "../context/AuthContext";

 const Certi = React.forwardRef((props,ref) => {

  const {firstname,lastname}=useContext(AuthContext);

  return (
      <div className="cert_container" ref={ref} >
      <title>Certificate</title>
      <div className="name">{firstname.slice(0,1).toUpperCase()}{firstname.slice(1,firstname.length)} {lastname.slice(0,1).toUpperCase()}{lastname.slice(1,lastname.length)}</div>
      </div>
  )
});



export default Certi;