import React from 'react';
import Button from 'react-bootstrap/Button';
import './index.css';
import {Assessments} from '../assessments';
import 'react-router-dom';
// import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';





export const Dashboard = ({user}) => {
  console.log(user)
  return (
    <section id='dashboard'>
        <nav>
       
        <div className='side-menu'>
          
        <Button className='button-side' href="#">Profile</Button> 
        <Button className='button-side' href="#">Notifications</Button>
        <Button className='button-side' href="../assessments">Assessments</Button>
        <Button className='button-side' href="#">LeaderBoard</Button>
        <Button className='button-side' href="#">Grades</Button>

        <Button className='button-side' href="../login">Log Out</Button>
      
        </div>

        </nav>

        <header>
        <div>
        <h1>Dashboard</h1>
      
      </div>
          

        </header>

        <main>
          <div>
        <Row>
        <Col>Profile</Col>
        <Col>  
        <div >

<Assessments />
</div></Col>
      </Row>
      <Row>
        <Col>Grades</Col>
        <Col>Leaderboard </Col>
        <Col>Badges</Col>
      </Row>
          </div>
        

        </main>
    </section>


    
    
    
      
    
    


  )
}
