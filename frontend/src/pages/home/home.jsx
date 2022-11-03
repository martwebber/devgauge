import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import hero from "../images/hero.jpg";
import './home.css';
import { Link } from "react-router-dom";
// import "../signup/signupform";

//import { SignUp } from './pages/signup/signupform';

export const HomePage = () => {
    return (
        <div className="h-main">
    <Container fluid>
      <Row>
        <Col sm={5} className="intro">
            <h1>Matching developers with great companies.</h1><br />
            <h5>We are the market-leading technical interview platform to identify and hire developers wherever they are.</h5><br /><br />
            <Button href="../login">Continue Journey</Button>

        </Col>
        <Col sm={7}>
        <img src={hero} alt="imagecard" className="hero-img" />


        </Col>
      </Row>
      <Row>
        <Col sm className="tm">
            <h3>For Team Manager</h3>
            <p>We are the market-leading technical interview platform to identify and hire developers wherever they are.</p>
            <Link to={'/signup'}><Button className="hire">Start Hiring</Button></Link>
        </Col>
        <Col sm className="student">
            <h3>For Team Students</h3>
            <p>Join over 18 million developers, practice coding skills, prepare for Interviews and get hired.</p>
            <Link to={'/signup'}><Button className="hire">Get Hired</Button></Link>

        </Col>
        
      </Row>
    </Container>
            {/* <div className="container1">
                
                <div className="h-one">
        

                </div>
                <div className="h-two">

                </div>
            </div>
            <div className="container2">
                <div className="h-three">

                </div>
                <div className="h-four">

                </div>
            </div> */}
        
        
        </div>
    )}
