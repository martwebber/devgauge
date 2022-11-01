import React from "react";
import { Col } from "react-bootstrap";
import Button from "react-bootstrap/esm/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import useForm from "../../hooks/useForm";
import "./signup.css";
export const SignUp = () => {
  const [inputdata, handleChange] = useForm();
  let navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);

    fetch("/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        first_name: inputdata.firstname,
        last_name: inputdata.lastname,
        username: inputdata.username,
        email: inputdata.email,
        password: inputdata.password,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        localStorage.setItem("userInfo", JSON.stringify(data));
        navigate("/");
      });
  };
  console.log(inputdata);
  return (
    <div className="body">
      {/* <div>
                <h2>Practice coding, prepare for interviews, and get hired.</h2>
            </div> */}

      <form onSubmit={handleSubmit}>
        <div className="login-form">
          <div>
            <div>
              {/* <label className="title">First Name</label> */}
            </div>
            <div>
              <input
                className="name"
                type="text"
                placeholder="Enter first name"
                name="firstname"
                onChange={handleChange}
              />
            </div>
          </div><br/>

          <div>
            <div>
              {/* <label className="title">Last Name</label> */}
            </div>
            <div>
              <input
                className="name"
                type="text"
                placeholder="Enter last name"
                name="lastname"
                onChange={handleChange}
              />
            </div>
          </div>
          <div><br/>
            <div>
              {/* <label className="title">Usename</label> */}
            </div>
            <div>
              <input
                className="name"
                type="text"
                placeholder="Enter username"
                name="username"
                onChange={handleChange}
              />
            </div>
          </div><br/>
          <div>
            <div>
              {/* <label className="title">Email address</label> */}
            </div>
            <div>
              <input
                className="name"
                type="email"
                placeholder="Enter email"
                name="email"
                onChange={handleChange}
              />
            </div>
          </div><br/>
          <div>
            <div>
              {/* <label className="title">Password</label> */}
            </div>
            <div>
              <input
                className="name"
                type="password"
                placeholder="Password"
                name="password"
                onChange={handleChange}
              />
            </div>
          </div>
          <br/>
          <div>
          {/* <Button id="signup-button" type="submit">
          Create an account
        </Button> */}

        <button type="submit" className="button-1" value="Create an account">Create an account</button>
          </div>
      

        
        </div>
      </form>
    </div>
  );
};
