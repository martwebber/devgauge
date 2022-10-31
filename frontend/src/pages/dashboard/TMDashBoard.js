import React, {useEffect, useState} from "react";
import "../questions/Question.css";
import TMCard from "./TMCard"

function TMDashBoard({user}) {
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
    <div>
      <div style={{ backgroundColor: "lightblue" }}>
        <div className="tmTitle">
          <h1>Our Listed Assessments</h1>
        </div>
        <div className="tmBody">
          <p>
            We are the market-leading technical interview platform to identify
            and hire developers
          </p>
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
