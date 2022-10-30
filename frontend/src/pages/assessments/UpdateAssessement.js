import React, { useState } from "react";
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

  function handlehide() {
    setIsHidden((isHidden) => !isHidden);
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
      { isHidden ? <Edit 
      titleBody={titleBody}
      setTitleBody={setTitleBody}
      setIsHidden={setIsHidden}
      // onHandleUpdate={handleUpdate}
       assessmentid={assessmentid}
       assessment={assessment}
       setAssessment={setAssessment}
       durationBody={durationBody}
       setDurationBody={setDurationBody}
       assessmentBody={assessmentBody}
       setAssessmentBody={setAssessmentBody}
       descriptionBody={descriptionBody}
       setDescriptionBody={setDescriptionBody}
      /> : null}
      </div>
     
      <button onClick={handlehide} style={{ backgroundColor: "blue", borderRadius: 15 + "px" }}>
        Edit
      </button>
    </div>
  );
}
export default UpdateAssessement;
