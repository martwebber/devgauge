import React from "react";
import { useState } from "react";
import { Form, Button, Col, Nav } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import useForm from "../../hooks/useForm";
import "./login.css";

export const Login = ({ setUser, user }) => {
  const [inputdata, handleChange] = useForm();
   const [errors, setErrors] = useState([]);

  let navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: inputdata.email,
        password: inputdata.password,
      }),
    }).then((res) => {
      if (res.ok) {
        res.json().then((res) => {
          localStorage.setItem("userInfo", JSON.stringify(res));
          if(res.user.user_type==="TM"){
            navigate("/dashboard")
          }else if(res.user.user_type==="student"){
            navigate(`/students/${res.user.id}`)
          }    
        });
      } else {
        res.json().catch((err) => {
          console.log(err);
        });
      }
    });
  };
  return (
    
      <div className="body">
        <form onSubmit={handleSubmit}>
        <div className="login-form">
        <h1 className="form-title">Login</h1>
        {errors.map((error) => {
          return  <p  style={{color: "red"}} key={error}>{error}</p>
        })}
          <div>
            <div>
              {/* <label className="title">Email address</label> */}
            </div>

            <div>
              <input
                type="email"
                name="email"
                onChange={handleChange}
                placeholder="Enter email"
                className="name"
              />
            </div>
          </div><br/>

          <div>
            <div>
              {/* <label className="title">Password</label> */}
            </div>
            <div>
              <input
                type="password"
                name="password"
                onChange={handleChange}
                placeholder="Password"
                className="name"
              />
            </div>
          </div>
          <br/>

          {/* <Button id="login-button" type="submit">
            Login
          </Button> */}
          <div>
          <button id="login-button" type="submit" className="loginButton">
            Login
          </button>
          <br/>
          <p className="signup-login-link">Don't have an account? <Link to={'/signup'}>Sign up here</Link>
 
</p>
          </div>
          
          </div>
        </form>
     
    </div>
  );
};
