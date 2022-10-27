import React from 'react';
import Button from 'react-bootstrap/Button';
import './index.css';
import '../assessments';
import 'react-router-dom';



export const Dashboard = () => {
  return (
    
    <div className='container'>
      <div>
        <h1>Dashboard</h1>
      
      </div>
        <div className='side-menu'>
        <Button className='button-side' href="#">Profile</Button> 
        <Button className='button-side' href="#">Notifications</Button>
        <Button className='button-side' href="../assessments/CreateAssessmentForm.jsx">Assessments</Button>
        <Button className='button-side' href="#">LeaderBoard</Button>
        <Button className='button-side' href="#">Grades</Button>

        <Button className='button-logout' href="#../login/login.jsx">Log Out</Button>
     
        </div>
    </div>
    


  )
}