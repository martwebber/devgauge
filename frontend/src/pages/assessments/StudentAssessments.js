import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../questions/Question.css";
import imagecard from "../images/imagecard.jpg";
import LastAssessment from "./LastAssessment";
import Profile from "../profile/Profile";

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
    <div className="studentAssessment">
      <div>
        <Profile />
      </div>
      <div>
        <div>
          <h3 className="titlequestion">Available Assessment</h3>
        </div>
        <div>
          {listQuestions.map((question) => {
            return (
              <div className="displayquestion">
                <div style={{ display: "flex" }}>
                  <div>
                    <img
                      src={imagecard}
                      alt="imagecard"
                      style={{
                        width: 10 + "rem",
                        marginLeft: 20 + "px",
                        marginTop: "20px",
                      }}
                    />
                  </div>
                  <div className="sideassessment">
                    <h4 style={{ textDecoration: "underline" }}>
                      {question.title}
                    </h4>
                    <p>
                      {" "}
                      <b>Description : </b>
                      {question.description}
                    </p>
                    <p>
                      {" "}
                      <b>Duration : </b>
                      {question.duration} minutes
                    </p>
                    <p>
                      {" "}
                      <b>Assessment_type: </b>
                      {question.assessment_type}
                    </p>
                    <Link to={`/students/${question.id}`}>
                      Start Assessment
                    </Link>{" "}
                    <hr />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="latestassessment">
        <LastAssessment />
      </div>
      {/* <div>
        <Profile />
      </div> */}
    </div>
  );
}
export default StudentAssessment;
