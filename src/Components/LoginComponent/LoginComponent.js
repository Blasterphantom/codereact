import { useState } from "react";
import { FloatingLabel, Form, Container } from "react-bootstrap";
import './Login.css'

// import jpIMG from "./assets/jp.svg";

import "../LoginComponent/Login.css";

function LoginMe() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (

 
<div style={{ background: '#00000', }}>


  <div className="login_box">
      <h2>CodeReserve</h2>
      <div className="user_box">
        <label>Username</label>
        <input type="text" required=""></input>
      </div>
      <div className="user_box">
        <label>Password</label>
        <input type="password" required=""></input>
      </div>
      <button type="submit">submit</button>
    </div>

</div>
   
    
          
);
}

export default LoginMe;
