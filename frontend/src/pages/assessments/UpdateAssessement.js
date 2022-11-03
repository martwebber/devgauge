import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Edit from "./Edit";

function UpdateAssessement({
  title,
  description,
  assessmentid,
  assessment,
  setAssessment,
  assessmentType,
  duration,
}) {
  const [isHidden, setIsHidden] = useState(false);
  const [titleBody, setTitleBody] = useState(title)
  const [descriptionBody, setDescriptionBody] = useState(description)
  const [durationBody, setDurationBody] = useState(duration)
  const [assessmentBody, setAssessmentBody] = useState(assessmentType)
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  function handlehide() {
    setIsHidden((isHidden) => !isHidden);
  }

  const userInfo = JSON.parse(localStorage.getItem("userInfo"));

  let navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    fetch(`/assessments/${assessmentid}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: 'Bearer ' + userInfo.jwt 
      },
      body: JSON.stringify({
        title: titleBody,
        description: descriptionBody,
        duration: durationBody,
        assessment_type: assessmentBody

      }),
    })
      .then((response) => response.json())

      .then((data) => {
        handleClose()
        navigate("/assessments")
      });

  }

  return (
    <div>
      <div className="editassessment">
<Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Update {titleBody} assessment</Modal.Title>
        </Modal.Header>
        <Modal.Body>
      <form  className="row g-3">
        <div className="col-12">
          <input
            type="text"
            name="title"
            value={titleBody}
            onChange={(e) => setTitleBody(e.target.value) }
            contentEditable={true}
            className="form-control"
            style={{ borderColor: "orange" }}
          />
        </div>
        <div className="col-12">
          <input
            type="text"
            name="description"
            value={descriptionBody}
             onChange={(e) => setDescriptionBody(e.target.value) }
            contentEditable={true}
            className="form-control"
            style={{ borderColor: "orange" }}
          />
        </div>

        <div className="col-6">
          <input
            type="text"
            name="duration"
            value={durationBody}
             onChange={(e) => setDurationBody(e.target.value) }
            contentEditable={true}
            className="form-control"
            style={{ borderColor: "orange" }}
          />
        </div>

        <div className="col-6">
          <input
            type="text"
            name="assessment_type"
            value={assessmentBody}
             onChange={(e) => setAssessmentBody(e.target.value) }
            contentEditable={true}
            className="form-control"
            style={{ borderColor: "orange" }}
          />
        </div>
        <br />
        <div>
    </div>
      </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Update assessment
          </Button>
        </Modal.Footer>
      </Modal>

      </div>
     
      <button onClick={handleShow} style={{ backgroundColor: "blue", borderRadius: 15 + "px" }}>
        Edit
      </button>
    </div>
  );
}
export default UpdateAssessement;
