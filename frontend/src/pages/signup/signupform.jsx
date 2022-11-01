import React from 'react'
import { Col } from 'react-bootstrap';
import Button from 'react-bootstrap/esm/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import useForm from '../../hooks/useForm';
import './signup.css';
export const SignUp = () => {
    const [inputdata, handleChange] = useForm();
    let navigate = useNavigate();

    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log(e)

        fetch('/users', {
            method: "POST",
            headers: {
              'content-type': 'application/json'
            },
            body: JSON.stringify({

                first_name: inputdata.firstname,
                last_name: inputdata.lastname,
                username: inputdata.username,
                email: inputdata.email,
                password: inputdata.password
            })
          })
          .then(response=>response.json())
          .then(data=>{console.log(data)
            localStorage.setItem("userInfo",JSON.stringify(data))
          navigate("/")
        })

    };
    console.log(inputdata)
    return (
        <div>
            <div>
                <h2>Practice coding, prepare for interviews, and get hired.</h2>
            </div>
            <div className="sign">
            <div className="sign-up-form">
                <Form onSubmit={handleSubmit}>
                    <Col xs={12}>
            <Form.Group className="mb-3" controlId="formFirstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" placeholder="Enter first name" name="firstname"  onChange={handleChange}/>
            </Form.Group>
            </Col>
            <Col xs={12}>

            <Form.Group className="mb-3" controlId="formLastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" placeholder="Enter last name" name="lastname" onChange={handleChange}/>
            </Form.Group>
            </Col>
            <Col xs={12}>

            <Form.Group className="mb-3" controlId="formUsername">
                <Form.Label>Usename</Form.Label>
                <Form.Control type="text" placeholder="Enter username" name="username" onChange={handleChange}/>
            </Form.Group>
            </Col>
            <Col xs={12}>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" name="email" onChange={handleChange}/>
            </Form.Group>
            </Col>
            <Col xs={12}>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" name="password" onChange={handleChange}/>
            </Form.Group>
            </Col>
            <Button id='signup-button' type="submit">
                Create an account
            </Button>
            </Form>
            </div>
        </div>
        </div>
      );
}
