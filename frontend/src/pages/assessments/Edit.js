import React from "react";

function Edit({assessmentid, titleBody, setTitleBody, onHandleUpdate, setIsHidden}) {
  function handleChange(event) {
    let updatedTitle = event.target.value;
    setTitleBody(updatedTitle);
  }

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
      }),
    })
      .then((response) => response.json())
      // .then((data) => {
      //   console.log(data);
      //   console.log(commentBody);
      // });
    
    .then((data) => {
      console.log(data)
      
      // onHandleUpdate(data)
    });

    setIsHidden((isHidden) => !isHidden);
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="user_comment"
            value={titleBody}
            onChange={handleChange}
            contentEditable={true}
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
