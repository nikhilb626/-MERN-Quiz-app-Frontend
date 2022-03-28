import React,{useEffect,useState} from 'react';
import Navbar from "./navbar";
import { getAllQuiz } from '../service/quizaxios';
import questions from "../questions";


const Adminscorelist = () => {


    const [data,setData]=useState([]);

    const getAll=async()=>{
        const response=await getAllQuiz();
        // console.log(response.data);
        setData(response.data);
    }


    useEffect(()=>{
        getAll();
    })



  return (
    <>
    <Navbar />

    <div className="heading">
        PARTICIPANTS LIST (RESULT-{data.length})
    </div>
    <table id="customers">
  <tr>
    <th>NAME</th>
    <th>EMAIL</th>
    <th>PHONE</th>
    <th>SCORE</th>
  </tr>
  {
      data.map((item)=>{
      return(
          <>
          <tr>
    <td>{item.firstname.slice(0,1).toUpperCase()}{item.firstname.slice(1,item.firstname.length)} {item.lastname.slice(0,1).toUpperCase()}{item.lastname.slice(1,item.lastname.length)}</td>
    <td>{item.email}</td>
    <td>+91{item.phone}</td>
    <td>{(100 * item.score) / questions.length} %</td>
  </tr>
          </>
      )    
       
      })
  }


</table>
    </>
  )
}

export default Adminscorelist;