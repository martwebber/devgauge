import React, {useEffect, useState} from "react";
import "../questions/Question.css";
import TMCard from "./TMCard"

function TMDashBoard({user}) {


const[assessment, setAssessment] = useState([])
console.log(user)
useEffect(() => {

  const config = {
    headers:{
      Authorization: 'Bearer ' + localStorage.getItem('token')    }
  }
    fetch("/assessments",config)
    .then((res) => res.json())
    .then((data) => {
        console.log(config)
        setAssessment(data)
    })
}, [])


  return (
    <div>
      <h1>TMDashBoard</h1>
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
            console.log(item)
            return(
                <TMCard
                title= {item.title}
                description= {item.description}
                key= {item.key}
                id= {item.id}
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
