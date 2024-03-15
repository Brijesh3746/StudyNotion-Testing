import "./App.css";
import Navbar from "./Components/Navbar"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Dashboard from "./pages/Dashboard"
import {Route, Routes} from "react-router-dom";
import {useContext, useState} from "react";
import PrivateRoute from "./Components/PrivateRoute"
import {AppContext} from "./Context/Context";

function App() {

    const [loggedIn,setLoggedIn] = useState(false);
    const{white} = useContext(AppContext);


    return(
      <div className={`${white === true ? "bg-white" : "bg-richblack-900"} w-screen h-screen flex flex-col  overflow-auto`}>
        <Navbar loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>

        <Routes>
          <Route path={"/"} element={<Home/>}></Route>
          <Route path={"/login"} element={<Login setLoggedIn={setLoggedIn}/>}></Route>
          <Route path={"/signup"} element={<Signup setLoggedIn={setLoggedIn}/>}></Route>
          <Route path={"/dashboard"} element={
              <PrivateRoute loggedIn={loggedIn}>
                  <Dashboard/>
              </PrivateRoute>
          }></Route>
        </Routes>

      </div>
  );
}

export default App;
