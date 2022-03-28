import React,{useState} from 'react';
import {useHistory} from "react-router-dom";
import Navbar from "./navbar";

const Terms = () => {


    const history=useHistory();

    const [checking,setChecking]=useState(false);




    const handleCheck=async()=>{
        setChecking(!checking);
    }

    const btnHandler=async()=>{
        history.push("/homehere");
    }


 



  return (
      <>
      <Navbar />
      <section id="terms">
          <div className="headingtop">Terms and Conditions for Company Name</div>
          <div className="heading">Introduction</div>
          <div className="para">These Website Standard Terms and Conditions written on this webpage shall manage your use of our website, Webiste Name accessible at Website.com.</div>
          <div className="para">These Terms will be applied fully and affect to your use of this Website. By using this Website, you agreed to accept all terms and conditions written in here. You must not use this Website if you disagree with any of these Website Standard Terms and Conditions.</div>
          <div className="heading">Intellectual Property Rights</div>
          <div className="para">Other than the content you own, under these Terms, Company Name and/or its licensors own all the intellectual property rights and materials contained in this Website.</div>
          <div className="para">You are granted limited license only for purposes of viewing the material contained on this Website.</div>
          <div className="heading">Restrictions</div>
          <div className="para">You are specifically restricted from all of the following:</div>
          <ul>
              <li>publishing any Website material in any other media;</li>
              <li>selling, sublicensing and/or otherwise commercializing any Website material;</li>
              <li>publicly performing and/or showing any Website material;</li>
              <li>using this Website in any way that is or may be damaging to this Website;</li>
              <li>using this Website in any way that impacts user access to this Website;</li>
              <li>using this Website contrary to applicable laws and regulations, or in any way may cause harm to the Website, or to any person or business entity;</li>
              <li>engaging in any data mining, data harvesting, data extracting or any other similar activity in relation to this Website;</li>
              <li>using this Website to engage in any advertising or marketing.</li>

          </ul>

          <div className="para">Certain areas of this Website are restricted from being access by you and Company Name may further restrict access by you to any areas of this Website, at any time, in absolute discretion. Any user ID and password you may have for this Website are confidential and you must maintain confidentiality as well.</div>
        <div className="heading">Your Content</div>
        <div className="para">In these Website Standard Terms and Conditions, “Your Content” shall mean any audio, video text, images or other material you choose to display on this Website. By displaying Your Content, you grant Company Name a non-exclusive, worldwide irrevocable, sub licensable license to use, reproduce, adapt, publish, translate and distribute it in any and all media.</div>
        <div className="para">Your Content must be your own and must not be invading any third-party's rights. Company Name reserves the right to remove any of Your Content from this Website at any time without notice.</div>
        <div className="heading">No warranties</div>
        <div className="para">This Website is provided “as is,” with all faults, and Company Name express no representations or warranties, of any kind related to this Website or the materials contained on this Website. Also, nothing contained on this Website shall be interpreted as advising you.</div>
        <div className="heading">Limitation of liability</div>
        <div className="para">
        In no event shall Company Name, nor any of its officers, directors and employees, shall be held liable for anything arising out of or in any way connected with your use of this Website whether such liability is under contract.  Company Name, including its officers, directors and employees shall not be held liable for any indirect, consequential or special liability arising out of or in any way related to your use of this Website.
        </div>

<div className="heading">Severability</div>
<div className="para">If any provision of these Terms is found to be invalid under any applicable law, such provisions shall be deleted without affecting the remaining provisions herein.</div>


<div className="heading">Variation of Terms</div>
<div className="para">
Company Name is permitted to revise these Terms at any time as it sees fit, and by using this Website you are expected to review these Terms on a regular basis.
</div>




<div className="inputdot">
<input type="checkbox" id="vehicle1" onChange={handleCheck}/>

I Agree with all above
</div>


<div className="termBtn">
<button disabled={!checking} className="btn" onClick={btnHandler}>
          Continue
        </button>
</div>





      </section>

      </>
  )
};

export default Terms;
