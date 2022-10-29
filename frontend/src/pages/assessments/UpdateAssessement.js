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
  const [isHidden, setIsHidden] = useState(true);
  const [titleBody, setTitleBody] = useState(title)

  function handlehide() {
    setIsHidden((isHidden) => !isHidden);
  }

  function handleUpdate(updatedTitle) {
    const updateTitle = assessment.map((item) =>
      item.id === updatedTitle.id ? updatedTitle : item
      
    );
    // console.log(updateTitle)
    setTitleBody(updateTitle);
  }
  return (
    <div>
      {/* {isHidden ? null : <Edit />} */}
     { isHidden ? null : <Edit 
      titleBody={titleBody}
      setTitleBody={setTitleBody}
      setIsHidden={setIsHidden}
      onHandleUpdate={handleUpdate}
       assessmentid={assessmentid}
       assessment={assessment}
       setAssessment={setAssessment}
       duration={duration}
       assessmentType={assessmentType}
       title={title}
       description={description}
      />}
      <button onClick={handlehide} style={{ backgroundColor: "blue", borderRadius: 15 + "px" }}>
        Edit
      </button>
    </div>
  );
}
export default UpdateAssessement;
