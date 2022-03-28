import React,{useState,useContext} from 'react';
import AuthContext from '../context/AuthContext';
import {addUser} from "../service/useraxios";
import {useHistory} from "react-router-dom";
import Navbar from "./navbar";

const Register2 = () => {



    const history=useHistory();


const {regemail}=useContext(AuthContext);


const [error,setError]=useState("");
const [error2,setError2]=useState("");

    const [firstname,setFirstname]=useState("");
    const [lastname,setLastname]=useState("");
    const [phone,setPhone]=useState("");
    const [password,setPassword]=useState("");
    const [cpassword,setCpassword]=useState("");

    const [form2,setForm2]=useState("scale");



    const handleNext=async()=>{
        try{
        if(firstname==="" || firstname==="" || phone===""){
            console.log("please fill the form properly");
            setError("please fill the form properly")
        }
        else if(firstname!=="" && lastname!=="" && phone!==""){
            setForm2("scale for2");
            // console.log("this is registration email here ",regemail);
            setError("")

        }
        
        

        }catch(err){
            // console.log(err);
            setError(err.response.data.errorMessage);

        }
        
    }



    const handleRegister=async()=>{
        try{

            if(regemail==="" || firstname==="" || lastname==="" || phone==="" || password==="" || cpassword===""){
                // console.log("please fill the form properly");
                setError2("please fill the form properly");
            }else if(regemail!=="" && firstname!=="" && lastname!=="" && phone!=="" && password!=="" && cpassword!==""){
                if(password!==cpassword){
                    // console.log("confirm password does not match");
                    setError2("confirm password does not match");
                    
                }
                else if(password===cpassword){
                    const userDetail={
                        firstname,lastname,email:regemail,phone,password
                    }
                    // console.log(userDetail);
                    await addUser(userDetail);

                    setError2("");
                    history.push("/login");
                    
                }
            }

        }
        catch(err){
            // console.log(err);
            setError2(err.response.data.errorMessage);

        }
    }








  return (
      <>

<Navbar />

    <div className="heading">Registeration Form</div>
    <div className="form Register_form">

<div className={form2}>
    
<div className="form1">
    <div className="icon icon2"><i class="fas fa-user"></i></div>
   <input type="text" value={firstname} onChange={(e)=>setFirstname(e.target.value)} placeholder="Enter your First Name" />
   <input type="text" value={lastname} onChange={(e)=>setLastname(e.target.value)} placeholder="Enter your Last Name" />
   <input type="number" maxlength='10' minlength='10'   value={phone} onChange={(e)=>setPhone(e.target.value)} placeholder="Enter Phone no. (without code)" />

   <div className="error_container">{error}</div>

        <button onClick={handleNext}>NEXT</button>
    
    </div>

    <div className="form1 icon2">
    <div className="icon"><i className="fas fa-user"></i></div>
    <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Enter your Password" />
   <input type="password" value={cpassword} onChange={(e)=>setCpassword(e.target.value)} placeholder="Confirm  your Password" />

   <div className="error_container">{error2}</div>

        <button onClick={handleRegister}>REGISTER</button>
    
    </div>



 



</div>

  
     
    </div>

      </>
  )
};

export default Register2;
