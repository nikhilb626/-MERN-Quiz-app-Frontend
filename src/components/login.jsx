import React,{useState,useContext} from 'react';
import {loginUser} from "../service/useraxios";
import {useHistory} from "react-router-dom";
import AuthContext from '../context/AuthContext';
import { Link } from 'react-router-dom';
import Navbar from './navbar';

const Login = () => {


    const {getLoggedIn,getEmail,getFirstname,getLastname,getAdmin,getUserId,getphone,getAdminPass,getPart,getWin}=useContext(AuthContext);

    const history=useHistory();

    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");

    const [error,setError]=useState("");


    // const [form2,setForm2]=useState("scale");





    const handleLogin=async()=>{
        try{

            if(email==="" || password===""){
                // console.log("please fill the form properly");
                setError("please fill the form properly");
            }else if(email!=="" && password!==""){
                const userObj={
                    email,password
                }
               const userDetail=await loginUser(userObj);
            //    console.log("this is user detail ",userDetail.data);
                await getEmail(userDetail.data.email);
                await getFirstname(userDetail.data.firstname);
                await getLastname(userDetail.data.lastname);
                await getAdmin(userDetail.data.isAdmin);
                await getUserId(userDetail.data._id);
                await getphone(userDetail.data.phone);
                await getAdminPass(userDetail.data.password);
                await getPart(userDetail.data.isPart);
                await getWin(userDetail.data.isWin);
                await getLoggedIn();

                setEmail("");
                setPassword("");
                 setError("");
                // history.push("/termsandcondition");





                 if(userDetail.data.isAdmin===true){
                    history.push("/adminhomepage");
                }
                else if(userDetail.data.isAdmin===false){
             
                // await checkApp(userDetail.data.email);

                if(userDetail.data.isWin===true && userDetail.data.isPart===true){
                    history.push(`/certificate/${userDetail.data._id}`);
                    console.log(userDetail.data._id);


                }else if(userDetail.data.isWin===false && userDetail.data.isPart===true){
                    history.push("/termsandcondition");

                }
                else if(userDetail.data.isWin===false && userDetail.data.isPart===false){
                    history.push("/termsandcondition");

                }




                

                    
                }

                
            }

        }
        catch(err){
            console.log(err);
            setError(err.response.data.errorMessage);

        }
    }








  return (
      <>
    <Navbar />


    <div className="heading">Login Form</div>
    <div className="form Register_form">

<div className="scale2 scale">
    
<div className="form1">
    <div className="icon icon2"><i class="fas fa-user"></i></div>
   <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter your Email" />
   <input type="password"  value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Enter your Password" />
   <div className="error_container">{error}</div>


        <button onClick={handleLogin}>LOGIN</button>
        <div className="login_link">Create an Account ? <Link to="/" >Register</Link> </div>

    
    </div>




 



</div>

  
     
    </div>

      </>
  )
};

export default Login;
