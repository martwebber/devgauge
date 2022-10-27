import React from "react";

function CreateAnswer() {
  return (
    <div>
      <h1>Create a question</h1>
      <form>
        <div>
          <input type="text" placeholder="Enter Question" />
        </div>
        <div>
          <input type="text" placeholder="Enter correct answer" />
        </div>
      </form>
    </div>
  );
}
export default CreateAnswer;