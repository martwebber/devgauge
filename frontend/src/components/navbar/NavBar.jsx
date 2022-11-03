import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from 'react-router-dom';

import './navbar.css'

export const NavBar = ({setUser}) => {
  const navigate = useNavigate()
  function handleLogoutClick() {
    setUser(null)
    localStorage.removeItem("userInfo")
    navigate("/home")
  }

  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    return (
    <Navbar className='navbar'expand="lg">
    <Container fluid className='container'>
      <Navbar.Brand as={Link} to="/home" className='main'>devGauge</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-automy-2my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
        <Nav.Link as={Link} to="/home">Home</Nav.Link>

        {
          userInfo ?(
            
            <>
        {/* <Nav.Link as={Link} to="/tm">TM DashBoard</Nav.Link> */}
        {/* <Nav.Link as={Link} to="/student">Student</Nav.Link> */}
        <Nav.Link as={Link} to="/students">Students</Nav.Link>
        {userInfo.user.user_type === "TM"?(
          <>
                    <Nav.Link as={Link} to="/assessments">Assessments</Nav.Link>

                  <Nav.Link as={Link} to="assessments/create-assessment">Create Assessment</Nav.Link>
          </>
        ):(
          ''
        )}
            </>
            ) : (
        <>
        <Nav.Link as={Link} to="/contactus">Contact Us</Nav.Link>
        <Nav.Link as={Link} to="/blog">Blog</Nav.Link> 
        <Nav.Link as={Link} to="/about">About Us</Nav.Link> 
        <Nav.Link as={Link} to="/faqs">FAQs</Nav.Link> 

        </>
          )
            }
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="search"
              className="me-2"
              aria-label="Search"
            />
            <Button className='search-btn' >Search</Button>
          </Form>

        {
          userInfo ?(
            
            <button onClick={handleLogoutClick} type="submit" className="btn btn-primary">Logout</button>
          ) : (
        <>
        <Nav.Link className="nav-buttons" as={Link} to="/signup"><Button className="nav-buttons login-btn">Signup</Button></Nav.Link>
        <Nav.Link as={Link} to="/login"><Button className="nav-buttons login-btn">Login</Button></Nav.Link> 
        </>
          )
        }
        </Navbar.Collapse>
    </Container>
  </Navbar>



  );
}
