// import React from 'react';
// import Button from 'react-bootstrap/Button';
// import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import { Link } from 'react-router-dom';

// export const NavBar = () => {
//     return (
//           <Container fluid>
//             <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
//             <Navbar.Toggle aria-controls="navbarScroll" />
//             <Navbar.Collapse id="navbarScroll">
//               <Nav
//                 className="me-auto my-2 my-lg-0"
//                 style={{ maxHeight: '100px' }}
//                 navbarScroll
//               >
//                 <Nav.Link href="#action1">Home</Nav.Link>
//                 <Nav.Link href="#action2">Link</Nav.Link>
//                 <Nav.Link href="#" disabled>
//                   Link
//                 </Nav.Link>
//               </Nav>
//               <Form className="d-flex">
//                 <Form.Control
//                   type="search"
//                   placeholder="Search"
//                   className="me-2"
//                   aria-label="Search"
//                 />
//                 <Button variant="outline-success">Search</Button>
//               </Form>
//             </Navbar.Collapse>
//           </Container>
//       );
// }


import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import '../NavBar.css'

export const NavBar = () => {
    return (
    // <Navbar bg="light" expand="lg">
    //   <Container fluid>
    //     <Navbar.Brand href="#">devGauge</Navbar.Brand>
    //     <Navbar.Toggle aria-controls="navbarScroll" />
        // <Navbar.Collapse id="navbarScroll">
        //   <Nav
        //     className="me-auto my-2 my-lg-0"
        //     style={{ maxHeight: '100px' }}
        //     navbarScroll
        //   >
        //     <Nav.Link href="#action1">Home</Nav.Link>
        //     <Nav.Link href="#action2">About</Nav.Link>
        //     <Nav.Link href="#action2">Assessments</Nav.Link>
        //     <Nav.Link href="#action2">Blog</Nav.Link>
        //     <Nav.Link href="#action2">Contact</Nav.Link>
        //   </Nav>
        //   <Form className="d-flex">
        //     <Form.Control
        //       type="search"
        //       placeholder="Search"
        //       className="me-2"
        //       aria-label="Search"
        //     />
        //     <Button variant="outline-success">Search</Button>
        //   </Form>
        // </Navbar.Collapse>
    //   </Container>
    // </Navbar>
    <Navbar bg="light" expand="lg">
    <Container>
      <Navbar.Brand as={Link} to="/">devGauge</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
        <Nav.Link as={Link} to="/">Home</Nav.Link>
        <Nav.Link as={Link} to="/about">About</Nav.Link>
        <Nav.Link as={Link} to="/assessments">Assessments</Nav.Link>
        <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
        <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
        <Nav.Link as={Link} to="/signup">Sign Up</Nav.Link>
        <Nav.Link as={Link} to="/login">Login</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
    </Container>
  </Navbar>
  );
}
