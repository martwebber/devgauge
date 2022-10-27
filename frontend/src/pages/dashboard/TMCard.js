import React from "react";
import imagecard from "../images/imagecard.jpg"

function TMCard() {
  return (
    <div>
      <div className="card" style={{ width: 20 + "rem" , marginLeft: 30 + "px"}}>
        <img src={imagecard} alt="imagecard" className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title">Mastering and Understanding</h5>
          <p className="card-text">
            Alice and Bob each created one platform for hackerRank. The reviewer
            rates the two assessment
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
