import React, {useState, useEffect} from 'react';
import { Link } from "react-router-dom";
import "../questions/Question.css";
import imagecard from "../images/imagecard.jpg";

function LastAssessment(){


    const [lastAssessment, setLastAssessment]= useState({
        title: ""
    })

    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
   useEffect(() => {
    fetch("/latest", {
      headers: {
        Authorization: "Bearer " + userInfo.jwt,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setLastAssessment(data);
      });
  }, []);

    return(
        <div className="studentassessment" >
            <h3 className="titlequestion">Latest Assessment</h3>
            
            <div className="side">
            <div style={{display: "flex"}}>
            <div>
            <img src={imagecard} alt="imagecard"  style={{ width: 10 + "rem", marginLeft: 20 + "px" , marginTop: "20px"}} />
            </div>
            <div className="sideassessment">
            <div>
            <h4 style={{textDecoration: "underline"}}>{lastAssessment.title}</h4>
            </div>
            
            <p><b>Description : </b>{lastAssessment.description}</p>
            <p><b>Duration : </b>{lastAssessment.duration} minutes</p>
            <p> <b>Assessment_type: </b>{lastAssessment.assessment_type}</p>
            {/* <Link  to={`/students/${lastAssessment.questions.id}`}>Start Assessment</Link> <hr/> */}

            </div>
            </div>
            </div>
            
     
    </div>
    )
}
export default LastAssessment;