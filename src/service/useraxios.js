import axios from "axios";


const userUrl=`http://localhost:5000/userapi`;



export const sendEmail=async(email)=>{
    return await axios.post(`${userUrl}/sendotp`,email);
}


export const verifyOtp=async(otp)=>{
    return await axios.post(`${userUrl}/verifyotp`,otp);
}



export const addUser=async(data)=>{
    return await axios.post(`${userUrl}/adduser`,data);
}



export const loginUser=async(data)=>{
    return await axios.post(`${userUrl}/loginuser`,data);
}


export const logoutUser=async()=>{
    return await axios.get(`${userUrl}/logoutuser`);
}


export const loggedInUser=async()=>{
    return await axios.get(`${userUrl}/loggedIn`);
}


export const updateUser=async(updateData)=>{
    return await axios.put(`${userUrl}/updateuserstate`,updateData);
}


