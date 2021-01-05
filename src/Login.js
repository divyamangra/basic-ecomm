import React from "react";
import "./Login.css";
import { useState } from "react";

function Login() {
  const login = e => {
    e.preventDefault(); //stops from refresh
  };

  const Register = e => {
    e.preventDefault();
  };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="login_container">
      <h1>Sign in</h1>
      <form>
        <h5>E-mail</h5>
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <h5>Password</h5>
        <input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        ></input>
        <p />
        <button onClick={login}>Sign In</button>
        <button onClick={Register}>Sign up</button>
      </form>
    </div>
  );
}

export default Login;
