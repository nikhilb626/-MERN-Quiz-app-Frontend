import React,{useState,useContext} from 'react';
import {Link,useHistory} from "react-router-dom";
import { sendEmail,verifyOtp } from '../service/useraxios';
import AuthContext from '../context/AuthContext';
import Navbar from "./navbar";


const Register = () => {

    const history=useHistory();


    const {getRegEmail}=useContext(AuthContext);

    const [loading,setLoading]=useState(false);

    const [email,setEmail]=useState("");

    const [form2,setForm2]=useState("scale");
    const [otp,setOtp]=useState("");


    const [error,setError]=useState("");
    const [error2,setError2]=useState("");




    const handleOtpSend=async()=>{
        try{
        if(email===""){
            // console.log("please fill the form properly");
            setError("please fill the form properly");

        }
        else if(email!==""){

        
            const emailObj={
                email:email
            }


            setLoading(true);
            await sendEmail(emailObj);

             await  getRegEmail(email);

             setLoading(false);
            setForm2("scale for2");


        }
        
        

        }catch(err){
            // console.log(err);
            setError(err.response.data.errorMessage);

        }
        
    }




    const handleotpverify=async()=>{
        try{
            if(otp===""){
                // console.log("please fill the form properly");
            setError2("please fill the form properly");
                
            }
            else if(otp!==""){
    
            
                const otpObj={
                    otp:otp
                }
    
                const Res=await verifyOtp(otpObj);
                // console.log("this is otp response ",Res.data);
                if (Res.data===true){
                    history.push("/registersecond");
                    setError2("");
                }
                else if(Res.data===false){
                    // console.log("otp does not match");
                 setError2("otp does not match");

                }

    
            }
            

        }catch(err){
            console.log(err);
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
    <div className="icon"><i class="fas fa-user-plus"></i></div>
   <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter your email" />
        <button onClick={handleOtpSend}>Send OTP</button>

        {error!==""?(<>
    <div className="error_container">{error}</div>
    </>):loading?(<h3 className="loading">Loading...</h3>):""}

<div className="login_link">Already Registered ? <Link to="/login" >Sign in</Link> </div>
    
    </div>

    <div className="form1">
    <div className="icon icon2"><i className="fas fa-user"></i></div>
   <input type="number" value={otp} onChange={(e)=>setOtp(e.target.value)} placeholder="Enter OTP" />
    <div className="error_container">{error2}</div>
       
        <button onClick={handleotpverify}>Verify</button>
<div className="login_link">did not get OTP ? <span onClick={handleOtpSend} >resend</span> </div>
    
    </div>



 



</div>

  
     
    </div>

      </>
  )
};

export default Register;
