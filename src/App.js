import React from 'react';
import NavRoute from "./navRoute";
import axios from 'axios';
import {AuthContextProvider} from "./context/AuthContext";


axios.defaults.withCredentials=true;

const App = () => {
    return (
        <>  
    <AuthContextProvider>
    <NavRoute />
    </AuthContextProvider>
        </>
    )
}

export default App;
