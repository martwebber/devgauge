import React from "react";
// import "bootstrap/dist/css/bootstrap.css";
// import "bootstrap/dist/css/bootstrap.min.css";
import "../questions/Question.css";

function CreateAssessmentForm() {
  return (
    <div className="main">
      <form className="row g-3">
        <div className="col-12">
          <input
            type="text"
            className="form-control"
            placeholder="Assessment title"
            style={{ borderColor: "orange" }}
          />
        </div>
        <div className="col-md-6">
          <input
            type="text"
            className="form-control"
            placeholder="Esitimated Length(minutes)"
            style={{ borderColor: "orange" }}
          />
        </div>
        <div className="col-md-6">
          <input
            type="text"
            className="form-control"
            placeholder="Is Actual"
            style={{ borderColor: "orange" }}
          />
        </div>
        <div className="col-md-6">
          <input
            type="text"
            className="form-control"
            placeholder="Status: Preview or Published"
            style={{ borderColor: "orange" }}
          />
        </div>
        <div className="col-md-6">
          <input
            type="text"
            className="form-control"
            placeholder="Duration"
            style={{ borderColor: "orange" }}
          />
        </div><br/><br/><br/>
        <div>
          <input className="inputField" type="submit" value="Preview" />
        </div>
        <div>
          <input
            className="inputField"
            style={{ backgroundColor: "orange" }}
            type="submit"
            value="Create"
          />
        </div>
      </form>
    </div>
  );
}
export default CreateAssessmentForm;
