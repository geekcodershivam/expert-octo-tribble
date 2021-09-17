import React from "react";
import LandingPage from "./LandingPage";
import Layout from "./component/Layout";
import Login from "./component/Login";
import SignUp from "./component/SignUp";
import { BrowserRouter, Switch, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Layout>
          <Route path="/login" component={Login}/>
          <Route path="/signup" component={SignUp} />
          <Route path="/forgetpassword" component={Layout} />
        </Layout>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
