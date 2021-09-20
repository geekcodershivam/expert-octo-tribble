import React from "react";
import { BrowserRouter, Router, Route } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import Layout from "./Pages/Layout";
import Home from './Pages/Home'
import Header from "./Pages/Header";
import history from "./Store/history";
import SideList from "./components/NavBar/SideList"
import JobForm from "./components/Forms/JobForm";
import Login from "./components/AuthPage/Login";
import SignUp from "./components/AuthPage/SignUp";
import Forgetpassword from "./components/AuthPage/ForgetPassword";
import ResetPassword from "./components/AuthPage/ResetPassword";
function App() {
  return (
    <BrowserRouter > 
      <Router history={history}> 
      <Header/>
      <SideList/>
        <Layout>   
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/home" component={Home} />
          <Route path="/login" component={Login}/>
          <Route path="/signup" component={SignUp} />
          <Route path="/forgetpassword" component={Forgetpassword} />
          <Route path="/reset" component={ResetPassword} />
          <Route path="/posted" component={JobForm} />
        </Layout>
      </Router>
    </BrowserRouter>
  );
}

export default App;
