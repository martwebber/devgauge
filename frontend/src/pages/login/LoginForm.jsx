import React from 'react'
import { useState } from 'react';
import { Form, Button, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import useForm from '../../hooks/useForm';
import './login.css'
 
export const Login = ({setUser, user}) => {
 const [inputdata, handleChange] = useForm();
 
 let navigate = useNavigate();
 
 const handleSubmit = e =>{
   e.preventDefault();
 
   fetch('/login',{
     method:"POST",
     headers:{
       'Content-Type':'application/json'
     },
     body:JSON.stringify({
       email:inputdata.email,
       password:inputdata.password
     })
   })
   .then(res=>{
    if(res.ok){
      res.json().then(res=>{
        localStorage.setItem("userInfo",JSON.stringify(res))
        navigate('/dashboard')
           })
    }else{
      res.json().catch(err=>{console.log(err)})
    }
   }
    )
 }
   return (
       <div className="login-form">
           <Form onSubmit={handleSubmit}>
           <Col xs={12}>
         <Form.Group className="mb-3" controlId="formBasicEmail">
           <Form.Label>Email address</Form.Label>
           <Form.Control type="email" name="email" onChange={handleChange} placeholder="Enter email" />
         </Form.Group>
         </Col>
         <Col xs={12}>
 
         <Form.Group className="mb-3" controlId="formBasicPassword">
           <Form.Label>Password</Form.Label>
           <Form.Control type="password" name="password" onChange={handleChange} placeholder="Password" />
         </Form.Group>
         </Col>
         <Button id="login-button" type="submit">
           Login
         </Button>
       </Form>
       </div>
      
     );
}
