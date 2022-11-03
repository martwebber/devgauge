import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../questions/Question.css";
import imagecard from "../images/imagecard.jpg";

function StudentAssessment() {
  const [listQuestions, setListQuestions] = useState([]);
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  useEffect(() => {
    fetch("/assessments", {
      headers: {
        Authorization: "Bearer " + userInfo.jwt,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setListQuestions(data);
      });
  }, []);
  return (
    <div className="studentAssessment" >
      <div    
      >
        {listQuestions.map((question) => {
          return (
            <div className="card"
            style={{ width: 20 + "rem", marginLeft: 20 + "px" , marginTop: "20px"}}>
               <img src={imagecard} alt="imagecard" className="card-img-top" />
              <h4>{question.title}</h4>
              <p>{question.description}</p>
              <p>{question.duration}</p>
              <p>{question.assessment_type}</p>

              <Link to={`/students/${question.id}`}>Start Assessment</Link>
            </div>
          );
        })}
      </div>
      <div className="latestassessment">
      <div className="card">
        Display latest assessment
      </div>
      </div>
     
    </div>
  );
}
export default StudentAssessment;
