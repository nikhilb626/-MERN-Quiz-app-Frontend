import React,{useState,useContext} from "react";
import './App.css';
import questions from "./questions";
import AuthContext from "./context/AuthContext";
import Navbar from "./components/navbar";
import {useHistory} from "react-router-dom";
import { useEffect } from "react";
import { logoutUser } from './service/useraxios';
import { saveQuiz } from "./service/quizaxios";
import {updateUser} from "./service/useraxios";


function Quiz() {

  const history=useHistory();



  const {getScoreFunc,firstname,lastname,getLoggedIn,userId,useremail,phone,pass}=useContext(AuthContext);

   const    [currentQuestionIndex,setCurrentQuestionIndex]=useState(0);
   const [currentQuestion,setCurrentQuestion]=useState(0);
   const [score,setScore]=useState(0);

    const [showScore,setShowScore]=useState(false);

   const handleAnswerButton=async(isCorrect)=>{
     const  nextQuestion=currentQuestion+1;
      if (nextQuestion < questions.length) {
        setCurrentQuestion(nextQuestion);
      setCurrentQuestionIndex(currentQuestionIndex+1);

      } else {
        setShowScore(true);
        if((100 * score) / questions.length>=70){
          await handlescoreshow();
        }else if((100 * score) / questions.length<70){
          await handleLogUp();
        }
      }


      if(isCorrect){
        setScore(score+1);
      }
   }





   const handlescoreshow=async()=>{

    // firstname,lastname,email,phone,score

    try{
      if(firstname==="" || lastname==="" || useremail==="" || phone===""){
        console.log("please fill the form properly");
      }
      else if(firstname!=="" && lastname!=="" && useremail!=="" && phone!==""){
        const quizobj={
          firstname:firstname,
          lastname:lastname,
          email:useremail,
          phone:phone,
          score:score
        }

        // console.log(quizobj);
        await saveQuiz(quizobj);


        const updateObj={
          id:userId,
          firstname:firstname,
          lastname:lastname,
          email:useremail,
          password:pass,
          phone:phone,
          isPart:true,
          isWin:true
        }

        await updateUser(updateObj);

      

      }

    }
    catch(err){
      console.log(err.response.data.errorMessage);
    }

   }




   const handleclaim=async()=>{
    history.push(`/certificate/${userId}`);
   }



   const handleLogUp=async()=>{
    const updateObj={
      id:userId,
      firstname:firstname,
      lastname:lastname,
      email:useremail,
      password:pass,
      phone:phone,
      isPart:true,
      isWin:false
    }

    await updateUser(updateObj);
   }

   const handlelogout=async()=>{


    await logoutUser();
    await getLoggedIn();
    history.push("/login");
   }


   useEffect(()=>{
      getScoreFunc(score);
   },[showScore]);


  return (
    <>

    <Navbar />


    {
      showScore ?(<>
        <div className="score_section">
      
      <div className="score">Score {(100 * score) / questions.length} %</div> 
      <div className="declare">{ (100 * score) / questions.length>=70?(
        <>
        <div className="heading">Congratulation {firstname} {lastname}</div>
        <h1>You Won<i className="fas fa-trophy"></i></h1>
        </>
        ):(
          <>
        <div className="heading">Sorry {firstname} {lastname}</div>

          <h1>You Loose<i class="fas fa-heart-broken"></i></h1>
          </>
        )}</div>
     </div> 

     {
      (100 * score) / questions.length>=70?(<>
        <div className="showscoreBtn">
          <button onClick={handleclaim}>Claim Certificate</button>
        </div>
      </>):(
       <>
       <div className="showscoreBtn">
          <button onClick={handlelogout}>Log Out</button>
        </div>
       </>
      )
     }
      </>):
      
  <>

<div className="quest_container">
<div className="quest_status">
question {currentQuestionIndex + 1 } / {questions.length}
</div>
    {questions[currentQuestion].questionText}
</div>


<div className="answers_container">

{questions[currentQuestion].answerOptions.map((answerOption,index)=>(

  <button className="answer_card" onClick={()=>handleAnswerButton(answerOption.isCorrect)}>{answerOption.answerText}</button>
))}
</div>


</>


    }

  
    </>
  );
}

export default Quiz;
