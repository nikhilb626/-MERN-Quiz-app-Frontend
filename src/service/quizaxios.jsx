import axios from "axios";


const quizUrl=`http://localhost:5000/quizapi`;



export const saveQuiz=async(data)=>{
    return await axios.post(`${quizUrl}/addquiz`,data);
}


export const getAllQuiz=async()=>{
    return await axios.get(`${quizUrl}/showallquiz`);
}