import React from "react";
import "./Question.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";

function CreateNewQuestionForm() {
  return (
    <div className="question">
      <form className="row g-3">

      <div>
          <select class="form-select">
            <option selected>Select Topic</option>
            <option>Ruby</option>
            <option>Java Script</option>
            <option>Ruby on Rails</option>
            <option>Python</option>
            <option>C++</option>
          </select>
        </div>
        <div className="col-12">
          <input
            type="text"
            className="form-control"
            placeholder="Enter Question"
            style={{ borderColor: "orange" }}
          />
        </div>
        
        <div className="col-12">
          <input
            type="text"
            className="form-control"
            placeholder="Enter correct Answer"
            style={{ borderColor: "orange" }}
          />
        </div>
        <div className="col-12">
          <input
            type="text"
            className="form-control"
            placeholder="Enter Options"
            style={{ borderColor: "orange" }}
          />

          <input
            className="inputField"
            type="submit"
            value="Previous"
            style={{ backgroundColor: "orange" }}
          />
        </div>

        <br />
        <br />
        <br />
        <div>
          <input
            className="inputField"
            type="submit"
            value="Previous"
            style={{ backgroundColor: "blue" }}
          />
          <input
            className="inputField"
            type="submit"
            value="Next"
            style={{ backgroundColor: "orange" }}
          />
        </div>
      </form>
    </div>
  );
}
export default CreateNewQuestionForm;
