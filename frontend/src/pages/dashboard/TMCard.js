import React from "react";
// import { Route, Routes } from 'react-router-dom';
import imagecard from "../images/imagecard.jpg"


function TMCard({title, description}) {
  return (
    <div style={{display: "grid"}}>
    <div className="card" style={{ width: 20 + "rem" , marginLeft: 30 + "px"}}>
      <img src={imagecard} alt="imagecard" className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">
          {description}
        </p>
        <div>
          <button style={{backgroundColor: "orange", borderRadius: 15 + "px"}}>Solve Test</button>
        </div><br/>

        <div style={{}}>
          <button style={{backgroundColor: "blue", borderRadius: 15 + "px"}}>Edit</button>
        </div><br/>
        <div>
          <button style={{backgroundColor: "orangered", borderRadius: 15 + "px"}}>Delete</button>
        </div>
      </div>
    </div>
  </div>
  );
}
export default TMCard;
