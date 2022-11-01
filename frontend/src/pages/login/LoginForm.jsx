import React from "react";
import { useState } from "react";
import { Form, Button, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import useForm from "../../hooks/useForm";
import "./login.css";

export const Login = ({ setUser, user }) => {
  const [inputdata, handleChange] = useForm();

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
          navigate("/dashboard");
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
        {/* {errors.map((error) => {
          return  <p  style={{color: "white"}} key={error}>{error}</p>
        })} */}
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
          
          </div>
          
          </div>
        </form>
     
    </div>
  );
};
