import React from "react";

function Edit({
  assessmentid,
  titleBody,
  setTitleBody,
  setIsHidden,
  descriptionBody,
  setDescriptionBody,
  durationBody,
  setDurationBody,
  assessmentBody,
  setAssessmentBody
}) {


  const userInfo = JSON.parse(localStorage.getItem("token"));


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
        console.log(data);
      });

    setIsHidden((isHidden) => !isHidden);
  }
  return (
    <div className="main">
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
          <input type="submit" value="Save" />
        </div>
      </form>
    </div>
  );
}
export default Edit;
