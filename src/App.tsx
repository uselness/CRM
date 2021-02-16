import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom"
import Login from "./components/Login";
import Index from "./components/Index";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/index" component={Index} />
        <Route exact path="/login" component={Login}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
