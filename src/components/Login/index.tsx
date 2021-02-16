import React from "react";
import ParticlesBg from "particles-bg"
import "./style.less";
import LoginForm from "./LoginForm";

function Login () {
  return (
    <React.Fragment>
      <ParticlesBg type="cobweb" bg={true} />
      <LoginForm/>
    </React.Fragment>
  );
}

export default Login;