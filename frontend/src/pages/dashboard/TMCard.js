import React from "react";
// import { Route, Routes } from 'react-router-dom';
import imagecard from "../images/imagecard.jpg";
import UpdateAssessement from "../assessments/UpdateAssessement.js";
import DeleteAssessement from "../assessments/DeleteAssessement.js";
import { Link } from 'react-router-dom';

function TMCard({
  title,
  description,
  assessmentid,
  assessment,
  setAssessment,
  assessmentType,
  duration,
}) {
  return (
    <div>
      <div style={{ marginBottom: 20 + "px"}}>
      <div
        className="card"
        style={{ width: 20 + "rem", marginLeft: 20 + "px" , marginTop: "20px"}}
      >
        {/* <img src={imagecard} alt="imagecard" className="card-img-top" /> */}
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          
          <br />

          <div>
            <UpdateAssessement
              assessmentid={assessmentid}
              assessment={assessment}
              setAssessment={setAssessment}
              duration={duration}
              assessmentType={assessmentType}
              title={title}
              description={description}
            />
          </div>
          <div>
            <DeleteAssessement
              assessmentid={assessmentid}
              assessment={assessment}
              setAssessment={setAssessment}
            />
          </div>
          <div>
            <Link to={`/item/${assessmentid}`}>View Assessment</Link>
            

            
          </div>
        </div>
      </div>
    </div>
    </div>
    
  );
}
export default TMCard;
