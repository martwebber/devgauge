import React from "react";
import "../questions/Question.css";
import TMCard from "./TMCard"

function TMDashBoard() {
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
          <TMCard/>
        </div>
      </div>
    </div>
  );
}
export default TMDashBoard;
