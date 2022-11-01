import React, {useEffect, useState} from "react";
import "../questions/Question.css";
import TMCard from "./TMCard"
import CreateAssessmentForm from '../assessments/CreateAssessmentForm'
import {useNavigate} from "react-router-dom"

function TMDashBoard({user , setUser}) {

  const history = useNavigate();

    function handleClick (path){
      history(path)
  
    }
  const[assessment, setAssessment] = useState([])
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  

useEffect(() => {

  const config = {
    headers:{
      Authorization: 'Bearer ' + userInfo.jwt    }
  }
    fetch("/assessments",config)
    .then((res) => res.json())
    .then((data) => {
        setAssessment(data)
    })
}, [])
console.log(user)


  return (

    <div style={{textAlign: "center"}}>
     <div className= "homepage">
     <div style={{textAlign: "right"}}> 
        <button onClick={() => handleClick("/assessments/create-assessment")} style={{backgroundColor: "orange", borderRadius: 15 + "px", padding: "15px", fontSize: "20px"}} >Create Assessment</button>
      </div>
      {/* <p className="paragraph">We are the market-leading technical interview platform to identify and hire developers</p> */}
      </div>
      <div style={{ backgroundColor: "lightblue" }}>
        {/* <div className="tmTitle">
          <h1>Our Listed Assessments</h1>
        </div> */}
        <div className="tmBody">
          {/* <p>
            We are the market-leading technical interview platform to identify
            and hire developers
          </p> */}
          <div className="tmCard">
          {assessment.map((item) => {
          
            return(
                <TMCard
                title= {item.title}
                description= {item.description}
                duration={item.duration}
                assessmentType={item.assessment_type}
                key= {item.key}
                assessmentid= {item.id}
                assessment={assessment}
                setAssessment={setAssessment}
                />
            )
            
          })}
          </div>
            
        </div>
      </div>

      
    </div>
  );
}
export default TMDashBoard;
