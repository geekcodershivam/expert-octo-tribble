import React from "react";
import LandingPage from "./LandingPage";
import Layout from "./component/Layout";
import Login from "./component/Login";
import SignUp from "./component/SignUp";
import Home from './component/Home'
import { BrowserRouter, Router, Route } from "react-router-dom";
import history from "./Store/history";
function App() {
  return (
    <BrowserRouter >
      <Router history={history}>
        <Route exact path="/" component={LandingPage} /> 
       
        <Layout>  
          <Route exact path="/home" component={Home} />
          <Route path="/login" component={Login}/>
          <Route path="/signup" component={SignUp} />
          <Route path="/forgetpassword" component={Layout} />
        </Layout>
      </Router>
    </BrowserRouter>
  );
}

export default App;
