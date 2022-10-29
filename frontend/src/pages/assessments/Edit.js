import React from "react";

function Edit({
  assessmentid,
  titleBody,
  setTitleBody,
  onHandleUpdate,
  setIsHidden,
  descriptionBody,
  setDescriptionBody,
  durationBody,
  setDurationBody,
  assessmentBody,
  setAssessmentBody
}) {
  // function handleChange(event) {
  //   let updatedTitle = event.target.value;
  //   setTitleBody(updatedTitle);
  // }

  function handleSubmit(e) {
    // console.log(e);
    e.preventDefault();

    fetch(`/assessments/${assessmentid}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
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

        // onHandleUpdate(data)
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
