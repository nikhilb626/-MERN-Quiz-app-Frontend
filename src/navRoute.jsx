import React,{useContext} from "react";
import Quiz from "./Quiz";
import HomePage from "./homepage";
import {Route} from "react-router-dom";
import Register from "./components/Register";
import Register2 from "./components/register2";
import Login from "./components/login";
import Terms from "./components/terms";
import AuthContext from "./context/AuthContext";
import Certificatepage from "./screen/certificatepage";
import Adminhome from "./components/adminhome";
import Adminscorelist from "./components/adminscorelist";


const NavRoute = () => {

    const {loggedIn,checkAdmin,win}=useContext(AuthContext);

    return (
        <>{
          checkAdmin && loggedIn?(
                <>
    <Route path="/homehere" component={HomePage}  />
    <Route path="/quizpage" component={Quiz} />
    <Route path="/termsandcondition" component={Terms} />
    <Route path="/adminhomepage" component={Adminhome} />
    <Route path="/participantsscorelist" component={Adminscorelist} />
                </>
            ): win && loggedIn?(
                <>
    <Route path="/homehere" component={HomePage}  />
    <Route path="/quizpage" component={Quiz} />
    <Route path="/certificate/:id" component={Certificatepage} />

    <Route path="/termsandcondition" component={Terms} />
    <Route path="/adminhomepage" component={Adminhome} />
    <Route path="/participantsscorelist" component={Adminscorelist} />
                </>
            ):loggedIn?(
                <>
    <Route path="/homehere" component={HomePage}  />
    <Route path="/quizpage" component={Quiz} />
    <Route path="/termsandcondition" component={Terms} />
    <Route path="/certificate/:id" component={Certificatepage} />
                </>
            ):(
                <>
    <Route path="/" component={Register} exact />
    <Route path="/registersecond" component={Register2} />
    <Route path="/login" component={Login} />

                </>
            )
        }  
  
        </>
    )
}

export default NavRoute;