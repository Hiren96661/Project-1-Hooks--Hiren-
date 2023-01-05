import React from "react";
import LoginH from "./LoginH";
import UserdataH from "./UserdataH";
import HomePageH from "./HomePageH";
import ForgotpassH from "./ForgotpassH";

import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";



function App() {
  return (
    <>
    <Router>
        <Link to ="/LoginH" />
        <Link to = "/UserdataH"/>
        <Link to = "/HomePageH"/>
        <Link to = "/ForgotpassH"/>
       <Routes>
       <Route path="/" element = {<LoginH/>}/>
        <Route path="/LoginH" element = {<LoginH/>}/>
        <Route path="/UserdataH" element = {<UserdataH/>}/>
        <Route path="/HomePageH" element={<HomePageH/>}/>
        <Route path="/ForgotpassH" element={<ForgotpassH/>}/>
       </Routes>

    </Router>
    </>
  );
}

export default App;

