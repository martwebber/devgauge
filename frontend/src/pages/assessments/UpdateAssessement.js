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
    // console.log(e);
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
      // .then((data) => {
      //   console.log(data);
      //   console.log(commentBody);
      // });

      .then((data) => {
        console.log(data);
        navigate("/assessments")

        // onHandleUpdate(data)
      });

  }

  // function handleUpdate(updatedTitle) {
  //   const updateTitle = assessment.map((item) =>
  //     item.id === updatedTitle.id ? updatedTitle : item
      
  //   );
  //   // console.log(updateTitle)
  //   setTitleBody(updateTitle);
  // }
  return (
    <div>
      <div className="editassessment">
      {/* { isHidden ? <Edit 
      titleBody={titleBody}
      setTitleBody={setTitleBody}
      setIsHidden={setIsHidden}
       assessmentid={assessmentid}
       assessment={assessment}
       setAssessment={setAssessment}
       durationBody={durationBody}
       setDurationBody={setDurationBody}
       assessmentBody={assessmentBody}
       setAssessmentBody={setAssessmentBody}
       descriptionBody={descriptionBody}
       setDescriptionBody={setDescriptionBody}
      /> : null} */}

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
      <form  className="row g-3" onSubmit={handleSubmit}>
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
        <button type="submit" class="btn btn-primary">Save changes</button>
        <button type="button" class="btn btn-secondary close" data-dismiss="modal" aria-label="Close">Close</button>
        </div>
      </form>
        </Modal.Body>
      </Modal>

      </div>
     
      <button onClick={handleShow} style={{ backgroundColor: "blue", borderRadius: 15 + "px" }}>
        Edit
      </button>
    </div>
  );
}
export default UpdateAssessement;
